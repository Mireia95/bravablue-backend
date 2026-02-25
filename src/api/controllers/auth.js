const { generateToken } = require('../../utils/jwt');
const User = require('../models/User');
const bcrypt = require('bcrypt'); //para el login

//login user
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const error = new Error('Invalid credentials');
      error.status = 401;
      next(error);
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.email);
      return res.status(200).json(token);
    } else {
      const error = new Error('Invalid credentials');
      error.status = 401;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

//register user
const registerUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    //busco mail usuario
    const existedUser = await User.findOne({ email: user.email });
    //si ya existe, devuelvo error
    //si no existe devuelve null
    if (existedUser) {
      const error = new Error('Email already exists');
      error.status = 409;
      next(error);
    }

    const userDB = await user.save();
    return res.status(201).json(userDB);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  registerUser
};
