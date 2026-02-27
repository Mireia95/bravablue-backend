//importo modelo creado
const { deleteFileCloudinary } = require('../../utils/deleteFileCloudinary')
const Comment = require('../models/Comment')

//*POST crear un comentario
const createComment = async (req, res, next) => {
  try {
    //en el body hay que pasarle el _id del user
    const newComment = new Comment(req.body)

    if (req.file) {
      newComment.image = req.file.path
    }

    const createdComment = await newComment.save()
    return res.status(201).json({
      message: 'Comment created successfully',
      comment: createdComment
    })
  } catch (error) {
    next(error)
  }
}

//*DELETE deleteComment
//solo si es tu propio comentario o es Admin
const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params
    //!falta check si eres user o admin
    const deletedComment = await Comment.findByIdAndDelete(id)

    //elimino imagen
    deletedComment.image ? deleteFileCloudinary(deletedComment.image) : null

    return res.status(200).json({
      message: 'Comment deleted successfully',
      comment: deletedComment
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createComment,
  deleteComment
}
