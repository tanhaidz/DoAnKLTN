'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductID: {
        type: Sequelize.INTEGER
      },
      OperatingSystem: {
        type: Sequelize.STRING
      },
      Display: {
        type: Sequelize.STRING
      },
      Processor: {
        type: Sequelize.STRING
      },
      Memory: {
        type: Sequelize.STRING
      },
      Camera: {
        type: Sequelize.STRING
      },
      Battery: {
        type: Sequelize.STRING
      },
      Connectivity: {
        type: Sequelize.STRING
      },
      Weight_Dimensions: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProductDetails');
  }
};