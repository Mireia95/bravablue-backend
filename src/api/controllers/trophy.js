//importo modelo creado
const Trophy = require('../models/Trophy');

//*GET - obtener trofeos para pintarlos
const getTrophies = async (req, res, next) => {
  try {
    const trophies = await Trophy.find();
    return res.status(200).json(trophies);
  } catch (error) {
    next(error);
  }
};

//*POST - para postear un trofeo, solo si eres ADMIN
const createTrophy = async (req, res, next) => {
  try {
    const newTrophy = new Trophy(req.body);
    const createdTrophy = await newTrophy.save();
    return res
      .status(201)
      .json({ message: 'Trophy created successfully', trophy: createdTrophy });
  } catch (error) {
    next(error);
  }
};

//*PUT - actualizar trofeo, solo si eres ADMIN
const updateTrophy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedTrophy = new Trophy(req.body);
    modifiedTrophy._id = id;
    const updatedTrophy = await Trophy.findByIdAndUpdate(id, modifiedTrophy, {
      new: true
    });
    return res.status(200).json(updatedTrophy);
  } catch (error) {
    next(error);
  }
};

//*DELETE - eliminar trofeo, solo si eres ADMIN
const deleteTrophy = async (req, res, next) => {
  try {
    const { id } = req.params;
    //!falta check si eres admin
    const deletedTrophy = await Trophy.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Trophy deleted successfully',
      trophy: deletedTrophy
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTrophies,
  createTrophy,
  updateTrophy,
  deleteTrophy
};
