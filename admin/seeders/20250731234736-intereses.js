'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lts_intereses = ["Tecnología",
        "Ciberseguridad", 
        "Desarrollo de Software",  
        "Inteligencia Artificial",
        "Ciencia de Datos",  
        "Blockchain",
        "Internet de las Cosas (IoT)",  
        "Marketing Digital",
        "Videojuegos",
        "Finanzas y Criptomonedas"]

    for (let i =0; i<10; i++){
      await queryInterface.bulkInsert('intereses', [{
         descripcion: lts_intereses[i],
         createdAt: new Date(), updatedAt: new Date()}],
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
