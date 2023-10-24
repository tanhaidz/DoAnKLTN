'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ProductDetail.belongsTo(models.Product, {
      //   foreignKey: 'ProductID',
      //   targetKey: 'ProductID'
      // })
    }
  }
  ProductDetail.init({
    ProductID: DataTypes.INTEGER,
    OperatingSystem: DataTypes.STRING,
    Display: DataTypes.STRING,
    Processor: DataTypes.STRING,
    Memory: DataTypes.STRING,
    Camera: DataTypes.STRING,
    Battery: DataTypes.STRING,
    Connectivity: DataTypes.STRING,
    Weight_Dimensions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};