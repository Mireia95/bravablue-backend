const { isAuth } = require('../../middlewares/isAuth');
const { createComment, deleteComment } = require('../controllers/comment');

const commentsRouter = require('express').Router();

commentsRouter.post('/', isAuth, createComment);
commentsRouter.delete('/:id', isAuth, deleteComment);

module.exports = commentsRouter;
