'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Receipts', {
      idReceipt: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      usersIdUser: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateOfSale: {
        allowNull: false,
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Receipts');
  }
};