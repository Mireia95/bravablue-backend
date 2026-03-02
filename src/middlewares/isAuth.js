const User = require('../api/models/User')
const { verifyToken } = require('../utils/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer', '')
    if (!token) return res.status(401).json('Unauthorized')

    const { id } = verifyToken(token)
    const user = await User.findById(id)
    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json('Unauthorized')
  }
}

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
      return res.status(401).json('Unauthorized')
    }

    const { id } = verifyToken(token)
    const user = await User.findById(id)

    if (user.role === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(401).json('Unauthorized')
    }
  } catch (error) {
    next(error)
  }
}

//middleware basado en rol y user que hace la petición
//o es admin o es el propio user logueado haciendo peticiones sobre sus propios datos
const isOwnerOrAdmin = ({ Model, field }) => {
  return async (req, res, next) => {
    try {
      const id = req.params.id //!user id o comment id
      const model = await Model.findById(id) //!comment o el user

      if (!model) {
        const error = new Error('Model not found')
        error.status = 404
        return next(error)
      }

      if (
        req.user.role !== 'admin' &&
        model[field].toString() !== req.user.id
      ) {
        const error = new Error('Permission denied')
        error.status = 403
        return next(error)
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { isAuth, isAdmin, isOwnerOrAdmin }
