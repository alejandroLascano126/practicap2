'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lts_suscriptores = [["Alejandro","alejandrolascano126@gmail.com"],["Erick","erso@gmail.com"]]

    for (let i =0; i<2; i++){
      await queryInterface.bulkInsert('suscriptores', [{
         nombre: lts_suscriptores[i][0],
         email: lts_suscriptores[i][1],
         fecha_registro: new Date(),
         createdAt: new Date(), 
         updatedAt: new Date()}],
      {})
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
