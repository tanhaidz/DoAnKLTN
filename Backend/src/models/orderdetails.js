'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  OrderDetail.init({
    OrderID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    UnitPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};