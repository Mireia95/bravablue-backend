//!PENDIENTE IMPORTAR MIDDLEWARE
const {
  getTrophies,
  updateTrophy,
  createTrophy,
  deleteTrophy
} = require('../controllers/trophy');

const trophiesRouter = require('express').Router();

trophiesRouter.get('/', getTrophies);
trophiesRouter.put('/:id', isAdmin, updateTrophy);
trophiesRouter.post('/', isAdmin, createTrophy);
trophiesRouter.delete('/:id', isAdmin, deleteTrophy);

module.exports = trophiesRouter;
