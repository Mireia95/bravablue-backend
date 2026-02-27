const { isAdmin } = require('../../middlewares/isAuth')
const {
  getTrophies,
  updateTrophy,
  createTrophy,
  deleteTrophy
} = require('../controllers/trophy')

const trophiesRouter = require('express').Router()

trophiesRouter.get('/', getTrophies)
trophiesRouter.put('/:id', isAdmin, upload.single('image'), updateTrophy)
trophiesRouter.post('/', isAdmin, upload.single('image'), createTrophy)
trophiesRouter.delete('/:id', isAdmin, deleteTrophy)

module.exports = trophiesRouter
