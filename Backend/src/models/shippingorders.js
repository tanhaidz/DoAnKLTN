'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShippingOrder.init({
    OrderID: DataTypes.INTEGER,
    ExpectedDate: DataTypes.DATE,
    ShippingMethod:DataTypes.STRING,
    ShippingStatus: DataTypes.STRING,
    ShippingAddress: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'ShippingOrder',
  });
  return ShippingOrder;
};