'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lts_suscriptores = [[1,1],[2,2]]

    for (let i =0; i<2; i++){
      await queryInterface.bulkInsert('suscriptor_interes', [{
         intereses_id: lts_suscriptores[i][0],
         suscriptores_id: lts_suscriptores[i][1],
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
