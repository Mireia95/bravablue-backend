const { isAuth, isOwnerOrAdmin } = require('../../middlewares/isAuth')
const { createComment, deleteComment } = require('../controllers/comment')
const Comment = require('../models/Comment')
const { upload } = require('../../middlewares/file')

const commentsRouter = require('express').Router()

commentsRouter.post('/', isAuth, upload.single('image'), createComment)
commentsRouter.delete(
  '/:id',
  isAuth,
  isOwnerOrAdmin({ Model: Comment, field: 'user' }),
  deleteComment
)

module.exports = commentsRouter
