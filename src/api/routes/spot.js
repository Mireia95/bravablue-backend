const { isAdmin } = require('../../middlewares/isAuth')
const {
  getSpots,
  updateSpot,
  createSpot,
  deleteSpot
} = require('../controllers/spot')

const spotsRouter = require('express').Router()

spotsRouter.get('/', getSpots)
spotsRouter.put('/:id', isAdmin, upload.single('image'), updateSpot)
spotsRouter.post('/', isAdmin, upload.single('image'), createSpot)
spotsRouter.delete('/:id', isAdmin, deleteSpot)

module.exports = spotsRouter
