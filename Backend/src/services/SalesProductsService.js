import db from "../models"
const { Op } = require('sequelize');

var _ = require("lodash");
export let getSaleProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {




            const today = new Date();

            let data = await db.SaleProducts.findAll({
                where: {
                    StartDate: {
                        [Op.lte]: today,
                    },
                    EndDate: {
                        [Op.gte]: today,
                    },
                },
                attributes: ['Discount'],
                include: [
                    {
                        model: db.Product,

                    },
                ],
                raw: true,
                nest: true,
            })
            let saleProducts = []
            if (data.length > 0) {
                data.map((product) => {
                    const productData = product;
                    const { Discount, Product } = productData;
                    const productData1 = { ...Product, Discount };
                    saleProducts.push(productData1);
                })

            }

            resolve(saleProducts);
        } catch (error) {
            reject(error);
        }
    })
}