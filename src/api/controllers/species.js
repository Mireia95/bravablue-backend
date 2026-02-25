//importo modelo creado
const Species = require('../models/Species');

//*GET - obtener especies para pintarlas
const getSpecies = async (req, res, next) => {
  try {
    const species = await Species.find();
    return res.status(200).json(species);
  } catch (error) {
    next(error);
  }
};

//*GET BY ID - ver detalles de una especie
const getSpeciesById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const species = await Species.findById(id).populate('comments');
    if (species) {
      return res.status(200).json(species);
    }
  } catch (error) {
    next(error);
  }
};

//*POST - para postearla, solo si eres ADMIN
const createSpecies = async (req, res, next) => {
  try {
    const newSpecies = new Species(req.body);
    const createdSpecies = await newSpecies.save();
    return res.status(201).json({
      message: 'Species created successfully',
      species: createdSpecies
    });
  } catch (error) {
    next(error);
  }
};

//*PUT - actualizar especie, solo si eres ADMIN
const updateSpecies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedSpecies = new Species(req.body);
    modifiedSpecies._id = id;
    const updatedSpecies = await Species.findByIdAndUpdate(
      id,
      modifiedSpecies,
      {
        new: true
      }
    );
    return res.status(200).json(updatedSpecies);
  } catch (error) {
    next(error);
  }
};

//*DELETE - eliminar especie, solo si eres ADMIN
const deleteSpecies = async (req, res, next) => {
  try {
    const { id } = req.params;
    //!falta check si eres user o admin
    const deletedSpecies = await Species.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Species deleted successfully',
      species: deletedSpecies
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSpecies,
  getSpeciesById,
  updateSpecies,
  createSpecies,
  deleteSpecies
};
