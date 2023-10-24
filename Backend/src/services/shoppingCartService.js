import db from "../models";
export const getShoppingCart = async (userData) => {
    try {
        const cart = await db.ShoppingCart.findOne({
            where: { UserID: userData.userID },
            raw: true,
        });
        if (cart) {
            try {
                const cartItems = await db.CartDetail.findAll({
                    where: { CartID: cart.id },
                    raw: true,
                    nest: false,
                });
                console.log(cartItems)
                if (cartItems.length > 0) {

                    return {
                        errCode: 0,
                        errMsg: "Success",
                        cartItems,
                        shoppingCart: cart
                    };
                } else {
                    return {
                        errCode: 0,
                        errMsg: "No item",
                        cartItems: [],
                        shoppingCart: cart
                    };
                }
            } catch (error) {
                console.log(error);
            }


        }
        else {
            let newCart = await db.ShoppingCart.create({
                UserID: userData.userID,
                TotalPrice: 0,
            });

            return {
                errCode: 0,
                errMsg: "No item",
                cartItems: [],
                shoppingCart: newCart
            };
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const saveChangeToDB = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {};
            if (item && item.length > 0) {
                await db.CartDetail.destroy({
                    where: {
                        CartID: item[0].CartID
                    }
                });

                await db.CartDetail.bulkCreate(item);

                const updatedItems = await db.CartDetail.findAll({
                    where: {
                        CartID: item[0].CartID
                    },
                    raw: true
                });


                let shoppingCart = await db.ShoppingCart.findOne({
                    where: { id: item[0].CartID },
                    raw: true
                });
                let totalPrice = 0;
                updatedItems.forEach((item) => {
                    totalPrice += +item.TotalPrice;
                });
                let data = await db.ShoppingCart.update(
                    { TotalPrice: totalPrice },
                    { where: { id: item[0].CartID } }
                );
                shoppingCart = await db.ShoppingCart.findOne({
                    where: { id: item[0].CartID },
                    raw: true
                });
                console.log(updatedItems)
                response = {
                    errCode: 0,
                    errMsg: "Success",
                    cartItems: updatedItems,
                    shoppingCart: shoppingCart
                };

            } else {
                response = {
                    errCode: 1,
                    errMsg: "Missing item data"
                };
            }

            resolve(response);
        } catch (error) {
            console.error('Lỗi khi cập nhật dữ liệu:', error);
            reject(error);
        }
    });
};