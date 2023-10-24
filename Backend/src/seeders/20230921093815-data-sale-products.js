'use strict';
const moment = require('moment');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const sampleData = [];

      for (let i = 1; i <= 20; i++) {
        const productId = `SM-${i}`;
        const discount = Math.floor(Math.random() * 99) + 1; // Random discount between 1 and 30
        const startDate = moment().add(Math.floor(Math.random() * 10) + 1, 'days').toDate();
        const endDate = new Date(startDate.getTime() + (5 * 24 * 60 * 60 * 1000));

        sampleData.push({
          ProductID: productId,
          Discount: discount,
          StartDate: startDate,
          EndDate: endDate
        });
      }
      console.log('Sample data created successfully!', sampleData);
      return queryInterface.bulkInsert('SalesProducts', sampleData);



    } catch (error) {
      console.error('Error creating sample data:', error);
    }

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
