'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartDetail.belongsTo(models.ShoppingCart, { foreignKey: 'CartID' }),
        CartDetail.belongsTo(models.Product, {
          foreignKey: 'ProductID'
        })
    }
  }
  CartDetail.init({
    CartID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    TotalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CartDetail',
  });
  return CartDetail;
};