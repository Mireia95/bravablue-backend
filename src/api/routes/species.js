const { isAdmin } = require('../../middlewares/isAuth');
const {
  getSpecies,
  getSpeciesById,
  updateSpecies,
  createSpecies,
  deleteSpecies
} = require('../controllers/species');

const speciesRouter = require('express').Router();

speciesRouter.get('/:id', getSpeciesById);
speciesRouter.get('/', getSpecies);
speciesRouter.put('/:id', isAdmin, updateSpecies);
speciesRouter.post('/', isAdmin, createSpecies);
speciesRouter.delete('/:id', isAdmin, deleteSpecies);

module.exports = speciesRouter;
