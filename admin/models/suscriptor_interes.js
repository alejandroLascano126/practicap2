'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptor_interes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  suscriptor_interes.init({
    intereses_id: DataTypes.INTEGER,
    suscriptores_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'suscriptor_interes',
    tableName: 'suscriptor_intereses'
  });
  return suscriptor_interes;
};