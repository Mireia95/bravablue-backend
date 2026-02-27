const { isAuth, isAdmin } = require('../../middlewares/isAuth')
const { getUserById, getUsers, deleteUser } = require('../controllers/user')

const usersRouter = require('express').Router()

usersRouter.get('/:id', isAuth, getUserById)
usersRouter.get('/', isAdmin, getUsers)
usersRouter.put('/:id', isAuth, upload.single('image'), updateUser)
usersRouter.delete('/:id', isAuth, deleteUser)

module.exports = usersRouter
