// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Product.hasMany(models.ProductInventory, {
//         foreignKey: 'ProductID'
//       })
//       Product.hasOne(models.ProductDetail, {
//         foreignKey: 'ProductID'
//       })
//       Product.hasOne(models.SaleProducts, { foreignKey: 'ProductID' });
//        Product.belongsTo(models.SaleProducts, { foreignKey: 'ProductID', targetKey: 'ProductID' });
//     }
//   }
//   Product.init({
//     ProductID: DataTypes.STRING,
//     ProductName: DataTypes.STRING,
//     BrandName: DataTypes.STRING,
//     Description: DataTypes.TEXT,
//     UnitPrice: DataTypes.DECIMAL,
//     PriceUSD: DataTypes.DECIMAL,
//     ImageURL: DataTypes.STRING,
//     QuantityInStock: DataTypes.INTEGER,
//     Rate: DataTypes.DECIMAL,
//     Sold: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Product',
//     hooks: {
//       beforeCreate: (product) => {
//         if (product.UnitPrice) {
//           product.PriceUSD = product.UnitPrice / 23000;
//         }
//       },
//       beforeUpdate: (product) => {
//         if (product.UnitPrice) {
//           product.PriceUSD = product.UnitPrice / 23000;
//         }

//       }

//     }
//   });
//   return Product;
// };