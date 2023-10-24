import db from "../models";
import product from "../models/product";
const today = new Date();
const { Op } = require('sequelize');
export let createProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {


            if (data) {
                let count = await db.Product.Count()
                await db.Product.create({
                    ...data, ProductID: `SM-${count + 1}`,
                })
                resolve({
                    errCode: 200,
                    errMsg: "success",
                });
            }

            // let result = await db.Product.bulkCreate(products).then(() => {
            //     console.log('Bulk insert completed successfully.');
            // }).catch((error) => {
            //     console.error('Error performing bulk insert:', error);
            // });
            // console.log(result)
            // resolve({
            //     errCode: 200,
            //     errMsg: "success",
            // });
        } catch (error) {
            reject(error);
        }
    })
}
export let getAllProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.Product.findAll({
                include: [
                    {
                        model: db.ProductDiscount,
                        attributes: ['Discount'],
                        where: {
                            StartDate: {
                                [Op.lte]: today,
                            },
                            EndDate: {
                                [Op.or]: {
                                    [Op.gte]: today,
                                    [Op.is]: null,
                                },
                            },
                        },


                    },
                ],
                raw: true,
                nest: false,
            }).catch((errors) => {
                console.log(errors);
            })
            result = result.map((product) => {
                const { ['ProductDiscount.Discount']: temp, ...rest } = product;
                return {
                    ...rest,
                    Discount: temp,
                };
            });
            resolve({
                errCode: 0,
                errMsg: "success",
                products: result
            });
        } catch (error) {
            reject(error);
        }
    })
}
export let getTopSellingProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(1)
            const topSellingProducts = await db.Product.findAll({
                order: [['Sold', 'DESC']],
                limit: 10
            });
            console.log(topSellingProducts)
            resolve({
                errCode: 0,
                data: topSellingProducts
            })
        } catch (error) {
            reject(error);
        }
    })
}
export let updateProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                let { product, productDetail, action } = data
                //
                console.log(product, productDetail, action)
                if (action === 'edit') {

                    try {
                        await db.Product.update(product, {
                            where: { id: product.id }
                        })
                        await db.ProductDetail.update(productDetail, {
                            where: { id: productDetail.id }
                        })
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    try {
                        let ImageURL ='https://smartviets.com/template/plugins/timthumb.php?src=/upload/iPHONE15/iPHONE15PR-PRM/15PRM-white_titanium.jpg&w=770&h=770&q=80'
                        let newproduct = await db.Product.create({ ...product, ImageURL, Rate: 5, Sold: 0 })
                        if (newproduct) {
                            productDetail = { ...productDetail, ProductID: newproduct.id }
                            await db.ProductDetail.create(productDetail)
                            await db.ProductDiscount.create({ ProductID: newproduct.id, Discount: 0, StartDate: Date.now(), EndDate: Date.now() + 6 * 24 * 60 * 60 * 1000 })
                        }

                    } catch (error) {
                        console.log(error)
                    }


                }



                let products = await db.Product.findAll()
                if (products) {
                    resolve({
                        errCode: 0,
                        errMsg: 'Update product successfully',
                        products: products
                    })
                }



            }
        } catch (error) {
            reject(error)
        }
    })
}
export let deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {

                await db.Product.destroy({
                    where: { id: id }
                })

                await db.ProductDiscount.destroy({ where: { ProductID: id } })
                await db.ProductDetail.destroy({ where: { ProductID: id } })


                let products = await db.Product.findAll()
                if (products) {
                    resolve({
                        errCode: 0,
                        errMsg: 'Update product successfully',
                        products: products
                    })
                }
            }
        } catch (error) {
            reject(error)
        }

    })
}
export let saveRatingProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                let product = await db.Product.findByPk(data.id)
                let rating = product.Rating
            }
        } catch (error) {
            reject(error)
        }
    })
}