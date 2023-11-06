import { Op } from "sequelize";
import db from "../models";
import e from "express";
import { raw } from "body-parser";
const Pusher = require('pusher');
const pusher = new Pusher({
    appId: "1692625",
    key: "8122cba0e2a96248542d",
    secret: "5a6117da871981857229",
    cluster: "ap1",
    useTLS: true
});
export const createNewOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { Customer, Order, Payment, OrderItems } = data;

            for (const item of OrderItems) {
                const product = await db.Product.findOne({ where: { id: item.ProductID } });
                console.log(item.Quantity)
                console.log(product.QuantityInStock)
                if (product) {
                    if (item.Quantity > product.QuantityInStock) {
                        return resolve({
                            errCode: 1,
                            errMsg: `Sản phẩm ${product.ProductName} không đủ số lượng tồn kho`
                        });
                    }
                }
            }

            let customerID = 0;
            let existingCustomer = await db.Customer.findOne({ where: { UserID: Customer.UserID } })

            if (existingCustomer) {
                existingCustomer.Name = Customer.Name;
                existingCustomer.Email = Customer.Email;
                existingCustomer.Address = Customer.Address;
                existingCustomer.Phone = Customer.Phone;
                existingCustomer.TotalOrders += 1;
                existingCustomer.TotalSpend = parseFloat(existingCustomer.TotalSpend);
                let orderTotalAmount = parseFloat(Order.TotalAmount);

                if (!isNaN(existingCustomer.TotalSpend) && !isNaN(orderTotalAmount)) {
                    existingCustomer.TotalSpend += orderTotalAmount;
                }
                await existingCustomer.save();
                customerID = existingCustomer.id;
            } else {
                console.log("Customer not found");
                try {
                    const newCustomer = await db.Customer.create({
                        ...Customer,
                        TotalOrders: 1,
                        TotalSpend: parseFloat(Order.TotalAmount),
                    });
                    console.log("check new customer:", newCustomer)
                    customerID = newCustomer.id;
                } catch (error) {
                    console.log(error);
                }


            }

            const newOrder = await db.Order.create({
                ...Order,
                CustomerID: customerID
            }, {
                raw: true
            });

            if (newOrder) {
                const updatedOrderItems = OrderItems.map(({ id, ...rest }) => ({
                    ...rest,
                    OrderID: newOrder.id
                }));
                await db.OrderDetail.bulkCreate(updatedOrderItems);
                // Giảm số lượng tồn kho sau khi tạo đơn hàng
                for (const item of OrderItems) {
                    const product = await db.Product.findByPk(item.ProductID);
                    if (product) {
                        product.QuantityInStock -= +item.Quantity;
                        product.Sold += +item.Quantity;
                        await product.save();
                    }
                }
                if (Payment) {
                    console.log("Checking payment", Payment)
                    await db.Payment.create({
                        ...Payment,
                        OrderID: newOrder.id
                    });
                }
                let payload = {
                    "icon": "bx bx-cart",
                    "content": `${Customer.Name} vừa tạo đơn hàng mới`,
                    "isRead": false
                }
                await db.Notification.create(payload)
                pusher.trigger('order', 'notify', payload);
                resolve({
                    errCode: 0,
                    errMsg: 'Đặt hàng thành công',
                    OrderID: newOrder.id,

                })
            }
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })

};
export const getOrder = (CustomerID) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(CustomerID);
            if (CustomerID) {
                console.log(CustomerID)
                let customer = await db.Customer.findOne({
                    where: { UserID: CustomerID }
                },
                )
                if (customer) {
                    let orders = await db.Order.findAll({
                        where: {
                            CustomerID: customer.id
                        },
                        raw: true
                    });


                    let orderIDs = orders.map(order => order.id);
                    let orderItems = await db.OrderDetail.findAll({
                        where: {
                            OrderID: orderIDs
                        },
                        raw: true
                    });
                    let groupedOrderItems = orderItems.reduce((grouped, item) => {
                        const orderID = item.OrderID;
                        if (!grouped[orderID]) {
                            grouped[orderID] = [];
                        }
                        grouped[orderID].push(item);
                        return grouped;
                    }, {});
                    resolve({
                        errCode: 0,
                        errMsg: "Success",
                        groupedOrderItems: groupedOrderItems,
                        orders: orders
                    })
                }
                else {
                    resolve({
                        errCode: 0,
                        errMsg: "Success",
                        groupedOrderItems: null,
                        orders: null
                    })
                }

            }

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export const getOrderDetails = (OrderID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (OrderID) {
                let OrderDetail = await db.OrderDetail.findAll({
                    where: {
                        OrderID: OrderID
                    }
                })
                resolve({
                    errCode: 0,
                    OrderDetail: OrderDetail
                })
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}
export let changeOrderStatus = (updatedOrder) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (updatedOrder) {
                await db.Order.update(updatedOrder, { where: { id: updatedOrder.id } })
                if (updatedOrder.Status === 'Đã Hủy') {
                    // let customer = await db.Customer.findOne({ where: { id: updatedOrder.CustomerID } });
                    // if (customer) {
                    //     customer.TotalOrders -= +1;
                    //     customer.TotalSpend -= +updatedOrder.TotalAmount;
                    //     await customer.save();
                    // }
                    let orderItems = await db.OrderDetail.findAll({ where: { OrderID: updatedOrder.id } })
                    if (orderItems && orderItems.length > 0) {
                        try {
                            for (let i = 0; i < orderItems.length; i++) {
                                let orderItem = orderItems[i];
                                let productID = orderItem.ProductID;
                                let quantity = orderItem.Quantity;

                                let product = await db.Product.findOne({ where: { id: productID } });

                                if (product) {
                                    let updatedStock = product.QuantityInStock + +quantity;
                                    let updatedSold = product.Sold - +quantity;
                                    await db.Product.update({ QuantityInStock: updatedStock, Sold: updatedSold }, { where: { id: productID } });
                                }
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }

                }




                let orders = await db.Order.findAll({ where: { CustomerID: updatedOrder.CustomerID } });

                if (orders) {
                    resolve({
                        errCode: 0,
                        errMsg: "Success",
                        orders: orders
                    })
                }

            }
        } catch (error) {
            console.log(error)
            reject(error);
        }
    })
}
