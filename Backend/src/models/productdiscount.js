'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDiscount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDiscount.belongsTo(models.Product, { foreignKey: 'ProductID' })
    }
  }
  ProductDiscount.init({
    ProductID: DataTypes.INTEGER,
    Discount: DataTypes.DECIMAL,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductDiscount',
  });
  return ProductDiscount;
};