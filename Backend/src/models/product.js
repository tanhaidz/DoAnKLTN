'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.ProductDiscount, { foreignKey: "ProductID" }),
        Product.hasMany(models.CartDetail, { foreignKey: "ProductID" })
      Product.belongsTo(models.ProductType, { foreignKey: 'TypeID', targetKey: 'TypeID' });
    }
  }
  Product.init({
    ProductName: DataTypes.STRING,
    BrandName: DataTypes.STRING,
    Description: DataTypes.TEXT,
    UnitPrice: DataTypes.DECIMAL,
    ImageURL: DataTypes.STRING,
    TypeID: DataTypes.STRING,
    QuantityInStock: DataTypes.INTEGER,
    Rate: DataTypes.DECIMAL,
    Sold: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};