'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailReceipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DetailReceipt.init({
    receiptsIdReceipt: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    productsIdProduct: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    entity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DetailReceipt',
  });
  return DetailReceipt;
};