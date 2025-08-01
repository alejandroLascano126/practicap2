const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const suscriptor = require('../models').Suscriptor;

router.post('/save', function (req, res, next) {
  let { nombre, email } = req.body;

  suscriptor.create({
    nombre: nombre,
    email: email,
    fecha_registro: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(suscriptor => {
    // Renderiza la vista y pasa el suscriptor creado
    res.render('secundario', { suscriptor });
  }).catch(error => {
    console.error('Error al guardar el suscriptor:', error); 
    res.status(400).send({ message: 'Error al guardar', error });
  });
});


// Obtener todos los suscriptores
router.get('/', async (req, res) => {
  try {
    const suscriptores = await suscriptor.findAll();
    res.json(suscriptores);
  } catch (error) {
    console.error('Error al obtener suscriptores:', error);
    res.status(500).json({ message: 'Error del servidor', error });
  }
});

// Obtener suscriptores por rango de fechas
// Ejemplo: /fecha?desde=2023-01-01&hasta=2023-12-31
router.get('/fecha', async (req, res) => {
  const { desde, hasta } = req.query;
  if (!desde || !hasta) {
    return res.status(400).json({ message: 'Debe proveer las fechas desde y hasta' });
  }
  try {
    const suscriptores = await suscriptor.findAll({
      where: {
        fecha_registro: {
          [Op.between]: [new Date(desde), new Date(hasta)]
        }
      }
    });
    res.json(suscriptores);
  } catch (error) {
    console.error('Error al buscar por rango de fechas:', error);
    res.status(500).json({ message: 'Error del servidor', error });
  }
});

// Obtener suscriptor por ID
router.get('/:id', async (req, res) => {
  try {
    const suscriptor = await suscriptor.findByPk(req.params.id);
    if (!suscriptor) return res.status(404).json({ message: 'Suscriptor no encontrado' });
    res.json(suscriptor);
  } catch (error) {
    console.error('Error al buscar por ID:', error);
    res.status(500).json({ message: 'Error del servidor', error });
  }
});

module.exports = router;

