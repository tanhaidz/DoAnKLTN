import db from "../models"
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
export let adminGetAllData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let customers = await db.Customer.findAll({ raw: true })
            let products = await db.Product.findAll({
                include: [
                    {
                        model: db.ProductType,
                        attributes: ['TypeName'], // Lấy chỉ thuộc tính tên khách hàng
                    },
                    {
                        model: db.ProductDiscount,

                    },

                ], raw: true
            })
            let orders = await db.Order.findAll({
                include: [
                    {
                        model: db.Customer,
                        attributes: ['Name'], // Lấy chỉ thuộc tính tên khách hàng
                    },


                ], raw: true
            })
            let productTypes = await db.ProductType.findAll({ raw: true })
            let productDiscounts = await db.ProductDiscount.findAll({
                include: [
                    {
                        model: db.Product,
                        attributes: ['ProductName'], // Lấy chỉ thuộc tính tên khách hàng
                    },


                ], raw: true
            })

            const modifiedProducts = products.map(product => {
                const { "ProductType.TypeName": temp, "ProductDiscount.Discount": Discount, ['ProductDiscount.EndDate']: EndDate, ['ProductDiscount.StartDate']: StartDate, ...rest } = product
                // const { ['ProductDiscount.Discount']: temp, ['ProductDiscount.EndDate']: EndDate, ['ProductDiscount.StartDate']: StartDate, ...rest } = product;

                if (
                    StartDate <= formattedDate &&
                    (EndDate >= formattedDate || EndDate === null)
                ) {
                    return {
                        Type: temp, ...rest, Discount, DiscountedPrice: product.UnitPrice - +(product.UnitPrice * +Discount/+100), StartDate: StartDate,
                        EndDate: EndDate, }
                } else {
                    return {
                        Type: temp, ...rest, Discount: 0, DiscountedPrice: product.UnitPrice, StartDate: StartDate,
                        EndDate: EndDate,
                    }
                }
                // return { Type: temp, ...rest, Discount, DiscountedPrice: product.UnitPrice * Discount }
            })
            const modifiedOrders = orders.map((order) => {
                const { "Customer.Name": customerName, ...rest } = order;
                return { CustomerName: customerName, ...rest };
            });
            const modifiedProductDiscounts = productDiscounts.map((discount) => {
                const { "Product.ProductName": productName, ...rest } = discount
                return { ProductName: productName, ...rest }
            })

            resolve({
                errCode: 0,
                errMsg: "Success",
                data: { customers: customers, products: modifiedProducts, orders: modifiedOrders, productTypes: productTypes, productDiscounts: modifiedProductDiscounts }
            })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
export let updateProductType = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                let { type, action } = data
                if (action === "add") {
                    await db.ProductType.create(type)
                } else if (action === "edit") {
                    await db.ProductType.update(type, { where: { id: type.id } })
                }
                else {

                    await db.ProductType.destroy({ where: { id: type.id } });
                }
                let productTypes = await db.ProductType.findAll({ raw: true })
                resolve({
                    errCode: 0,
                    errMsg: 'Success',
                    productTypes: productTypes
                })
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
export let updateProductDiscount = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                let { productDiscount, action } = data
                if (action === 'edit') {
                    await db.ProductDiscount.update(productDiscount, { where: { id: productDiscount.id } })
                } else if (action === 'add') {
                    await db.ProductDiscount.create(productDiscount)
                }
                let productDiscounts = await db.ProductDiscount.findAll({ raw: true })
                const modifiedProductDiscounts = productDiscounts.map((discount) => {
                    const { "Product.ProductName": productName, ...rest } = discount
                    return { ProductName: productName, ...rest }
                })
                resolve({
                    errCode: 0,
                    errMsg: 'Success',
                    productDiscounts: modifiedProductDiscounts
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}