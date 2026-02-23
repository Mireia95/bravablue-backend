//!PENDIENTE IMPORTAR Router

const authRouter = require('./auth');
const commentsRouter = require('./comment');
const coursesRouter = require('./course');
const speciesRouter = require('./species');
const spotsRouter = require('./spot');
const trophiesRouter = require('./trophy');
const usersRouter = require('./user');

const mainRouter = require('express').Router();

mainRouter.use('/comments', commentsRouter);
mainRouter.use('/courses', coursesRouter);
mainRouter.use('/species', speciesRouter);
mainRouter.use('/spots', spotsRouter);
mainRouter.use('/trophies', trophiesRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/users', usersRouter);

module.exports = mainRouter;
