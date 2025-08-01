'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Suscriptor extends Model {
    static associate(models) {
      // Aquí usar los modelNames correctos
      Suscriptor.belongsToMany(models.Interes, {
        through: 'suscriptor_intereses',
        foreignKey: 'suscriptores_id'
      });
    }
  }

  Suscriptor.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Suscriptor',  
    tableName: 'suscriptores',
  });

  return Suscriptor;
};
