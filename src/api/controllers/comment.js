//creo peticiones GET,POST,PUT,DELETE

//importo modelo creado
const Comment = require('../models/Comment')

//!petición GET
//que necesitamos?
//getCommentsByEspecies -- obtener comentarios de una especie? pero esto lo podemos conseguir desde la propia especie

/* const getComments = async (req, res, next) => {
  try {
    //uso find() para buscar datos en la BBDD
    const comments = await Comment.find()
    //devuelvo comments en formato json
    return res.status(200).json(comments)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error })
  }
} */

//!getCommentsByEspecies

//!POST postComment

//!DELETE deleteComment
//solo si es tu propio comentario o es Admin
