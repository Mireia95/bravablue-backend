//creo peticiones GET,POST,PUT,DELETE

//importo modelo creado
const Comment = require('../models/Comment');

//getCommentsByEspecies - esto lo podemos conseguir desde la propia especie. Check si lo usas
/* const getCommentsBySpecies = async (req, res, next) => {
  try {
    const { species } = req.params;
    const commentsSpecies = await Comment.find({ species: species });
    return res.status(200).json(commentsSpecies);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
}; */

//!POST crear un comentario
const createComment = async (req, res, next) => {
  try {
  } catch (error) {}
};

//!DELETE deleteComment
//solo si es tu propio comentario o es Admin
const deleteComment = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports = {
  createComment,
  deleteComment
};
