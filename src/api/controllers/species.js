//importo modelo creado
const { deleteFileCloudinary } = require('../../utils/deleteFileCloudinary');
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

//*GET BY AREA - filtrar species según Area
const getSpeciesByArea = async (req, res, next) => {
  try {
    const { area } = req.params;
    const species = await Species.find({ area });
    if (species) {
      return res.status(200).json(species);
    }
  } catch (error) {
    next(error);
  }
};

//*GET BY RARITY - filtrar species según Rarity
const getSpeciesByRarity = async (req, res, next) => {
  try {
    const { rarity } = req.params;
    const species = await Species.find({ rarity });
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

    if (req.file) {
      newSpecies.image = req.file.path;
    }

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
    const oldSpecies = await Species.findById(id);
    const modifiedSpecies = new Species(req.body);
    modifiedSpecies._id = id;

    //aseguro que los datos array [] no den undefined
    const location = req.body.location || [];
    const comments = req.body.comments || [];
    modifiedSpecies.location = [...oldSpecies.location, ...location];
    modifiedSpecies.comments = [...oldSpecies.comments, ...comments];

    if (req.file) {
      modifiedSpecies.image = req.file.path;

      oldSpecies.image ? deleteFileCloudinary(oldSpecies.image) : null;
    }

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
    const deletedSpecies = await Species.findByIdAndDelete(id);

    //elimino imagen en Cloudinary
    deletedSpecies.image ? deleteFileCloudinary(deletedSpecies.image) : null;

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
  getSpeciesByArea,
  getSpeciesByRarity,
  updateSpecies,
  createSpecies,
  deleteSpecies
};
