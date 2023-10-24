'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      ProductName: {
        type: Sequelize.STRING
      },
      BrandName: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      UnitPrice: {
        type: Sequelize.DECIMAL
      },
      ImageURL: {
        type: Sequelize.STRING
      },
      TypeID: {
        type: Sequelize.STRING
      },
      QuantityInStock: {
        type: Sequelize.INTEGER
      },
      Rate: {
        type: Sequelize.DECIMAL
      },
      Sold: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};