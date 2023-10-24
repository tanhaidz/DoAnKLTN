'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, { foreignKey: 'CustomerID' });
    }
  }
  Order.init({

    CustomerID: DataTypes.INTEGER,
    Date: DataTypes.DATE,
    Status: DataTypes.STRING,
    PaymentMethod: DataTypes.STRING,
    TotalAmount: DataTypes.DECIMAL,
    Note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};