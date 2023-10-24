// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       User.hasOne(models.Customer, {
//         foreignKey: 'CustomerID'
//       })
//       User.belongsTo(models.Allcode, {
//         foreignKey: 'RoleKeyMap',
//         targetKey: 'KeyMap'
//       })
//     }
//   }
//   User.init({
//     FullName: DataTypes.STRING,
//     Email: DataTypes.STRING,
//     Password: DataTypes.STRING,
//     PhoneNumber: DataTypes.STRING,
//     Address: DataTypes.STRING,
//     RoleKeyMap: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };