const { registerUser, loginUser } = require('../controllers/auth');

const authRouter = require('express').Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

module.exports = authRouter;
