import db from "../models";

export let getAllProductInventory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.ProductInventory.findAll({
                include: [
                    {
                        model: db.Product,

                        // attributes: ['ProductName'],
                    },
                ],
                raw: true,
                // nest: true
            })
            resolve({
                errCode: 0,
                data: data,
            })
        } catch (error) {
            reject(error);
        }
    })
}
export let getProductInventoryByID = (ProductID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (ProductID) {
                let data = await db.ProductInventory.findAll({
                    where: {
                        ProductID: ProductID
                    }
                })
                resolve({
                    errCode:0,
                    data: data,
                })
            }
        } catch (error) {
            reject(error);
        }
    })
}