'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DetailReceipts', {
      receiptsIdReceipt: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      productsIdProduct: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      entity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('DetailReceipts');
  }
};