'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suscriptor_interes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      intereses_id: {
        type: Sequelize.INTEGER
      },
      suscriptores_id: {
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

    await queryInterface.addConstraint('suscriptor_interes', {
      fields: ['intereses_id'],
      name: 'intereses_id_fk',
      type: 'foreign key',
      references: {
        table: 'intereses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });

    await queryInterface.addConstraint('suscriptor_interes', {
      fields: ['suscriptores_id'],
      name: 'suscriptores_id_fk',
      type: 'foreign key',
      references: {
        table: 'suscriptores',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suscriptor_intereses');
    await queryInterface.removeConstraint('interes_suscriptor', 'intereses_id_fk')
    await queryInterface.removeConstraint('interes_suscriptor', 'suscriptores_id_fk')
    await queryInterface.bulkDelete('intereses', null, {});
    await queryInterface.bulkDelete('suscriptores', null, {});
  }
};