const { deleteFileCloudinary } = require('../../utils/deleteFileCloudinary');
const User = require('../models/User');

//*GET
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//*GET BY ID
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const idUser = req.user.id;
    //!permission: admin || logged user que busca a si mismo
    if (req.user.role !== 'admin') {
      if (idUser !== id) {
        const error = new Error('Pemrission denied');
        error.status = 403;
        return next(error);
      }
    }

    const user = await User.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//*PUT
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldUser = await Spot.findById(id);
    const modifiedUser = new User(req.body);
    modifiedUser._id = id;

    //aseguro que los datos array [] no den undefined
    const species = req.body.species || [];
    const comments = req.body.comments || [];
    const trophies = req.body.trophies || [];
    modifiedUser.species = [...oldUser.species, ...species];
    modifiedUser.comments = [...oldUser.comments, ...comments];
    modifiedUser.trophies = [...oldUser.trophies, ...trophies];

    if (req.file) {
      modifiedUser.image = req.file.path;

      oldUser.image ? deleteFileCloudinary(oldUser.image) : null;
    }

    const updatedUser = await User.findByIdAndUpdate(id, modifiedUser, {
      new: true
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//*DELETE
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    //elimino imagen en Cloudinary
    deletedUser.image ? deleteFileCloudinary(deletedUser.image) : null;

    return res.status(200).json({
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
