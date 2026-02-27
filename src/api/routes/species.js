const { isAdmin } = require('../../middlewares/isAuth')
const {
  getSpecies,
  getSpeciesById,
  updateSpecies,
  createSpecies,
  deleteSpecies
} = require('../controllers/species')

const speciesRouter = require('express').Router()

speciesRouter.get('/:id', getSpeciesById)
speciesRouter.get('/', getSpecies)
speciesRouter.put('/:id', isAdmin, upload.single('image'), updateSpecies)
speciesRouter.post('/', isAdmin, upload.single('image'), createSpecies)
speciesRouter.delete('/:id', isAdmin, deleteSpecies)

module.exports = speciesRouter
