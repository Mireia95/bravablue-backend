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
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

//*PUT
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedUser = new User(req.body);
    modifiedUser._id = id;
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
    //!falta check si eres admin
    const deletedUser = await User.findByIdAndDelete(id);
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
