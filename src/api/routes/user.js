const { isAuth, isAdmin, isOwnerOrAdmin } = require('../../middlewares/isAuth')
const { getUserById, getUsers, deleteUser } = require('../controllers/user')
const User = require('../models/User')

const usersRouter = require('express').Router()

usersRouter.get(
  '/:id',
  isAuth,
  isOwnerOrAdmin({ Model: User, field: '_id' }),
  getUserById
)
usersRouter.get('/', isAdmin, getUsers)
usersRouter.put('/:id', isAuth, upload.single('image'), updateUser)
usersRouter.delete(
  '/:id',
  isAuth,
  isOwnerOrAdmin({ Model: User, field: '_id' }),
  deleteUser
)

module.exports = usersRouter
