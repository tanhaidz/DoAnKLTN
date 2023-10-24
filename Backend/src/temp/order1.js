// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Order extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Order.init({
//     CustomerID: DataTypes.INTEGER,
//     OrderDate: DataTypes.DATE,
//     ShippingAddress: DataTypes.STRING,
//     TotalAmount: DataTypes.FLOAT,
//     PaymentStatus: DataTypes.STRING,
//     ShippingStatus: DataTypes.STRING,
//     PaymentMethod: DataTypes.STRING,
//     OtherDetails: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Order',
//   });
//   return Order;
// };