'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.hasMany(models.CartDetail, {foreignKey:'CartID'})
    }
  }
  ShoppingCart.init({
    UserID: DataTypes.INTEGER,
    TotalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};