import db from "../models";
export let getProductDetailByID = (ProductID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = {}

            if (ProductID) {
                let productDetail = await db.ProductDetail.findOne({
                    where: {
                        ProductID: ProductID
                    }
                    , raw: true
                })

                if (productDetail) {
                    response = {
                        errCode: 0,
                        errMsg: 'Success',
                        productDetail: productDetail
                    }
                } else {
                    response = {
                        errCode: 1,
                        errMsg: 'No data',
                        productDetail: {}
                    }
                }



                resolve(response);
            }
        } catch (error) {
            reject(error);
        }
    })
}