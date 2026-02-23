//!PENDIENTE IMPORTAR MIDDLEWARE

const {
  getSpots,
  updateSpot,
  createSpot,
  deleteSpot
} = require('../controllers/spot');

const spotsRouter = require('express').Router();

spotsRouter.get('/', getSpots);
spotsRouter.put('/:id', isAdmin, updateSpot);
spotsRouter.post('/', isAdmin, createSpot);
spotsRouter.delete('/:id', isAdmin, deleteSpot);

module.exports = spotsRouter;
