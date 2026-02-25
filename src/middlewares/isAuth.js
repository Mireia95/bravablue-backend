const User = require('../api/models/User');
const { verifyToken } = require('../utils/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer', '');
    if (!token) return res.status(401).json('Unauthorized');

    const { id } = verifyToken(token);
    const user = await User.findById(id);
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json('Unauthorized');
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json('Unauthorized');
    }

    const { id } = verifyToken(token);
    const user = await User.findById(id);

    if (user.role === 'admin') {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(401).json('Unauthorized');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { isAuth, isAdmin };
