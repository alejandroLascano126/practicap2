'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interes extends Model {
    static associate(models) {
      Interes.belongsToMany(models.Suscriptor, { 
        through: 'suscriptor_intereses',
        foreignKey: 'intereses_id'
      });
    }
  }
  
  Interes.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interes',
    tableName: 'intereses'
  });
  
  return Interes;
};
