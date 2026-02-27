//importo modelo creado
const { deleteFileCloudinary } = require('../../utils/deleteFileCloudinary')
const Spot = require('../models/Spot')

//*GET - obtener spots para pintarlos
const getSpots = async (req, res, next) => {
  try {
    const spots = await Spot.find()
    return res.status(200).json(spots)
  } catch (error) {
    next(error)
  }
}

//*POST - para postearlo, solo si eres ADMIN
const createSpot = async (req, res, next) => {
  try {
    const newSpot = new Spot(req.body)
    const createdSpot = await newSpot.save()
    return res
      .status(201)
      .json({ message: 'Spot created successfully', spot: createdSpot })
  } catch (error) {
    next(error)
  }
}

//*PUT - actualizar spot, solo si eres ADMIN
const updateSpot = async (req, res, next) => {
  try {
    const { id } = req.params
    const modifiedSpot = new Spot(req.body)
    modifiedSpot._id = id
    const updatedSpot = await Spot.findByIdAndUpdate(id, modifiedSpot, {
      new: true
    })
    return res.status(200).json(updatedSpot)
  } catch (error) {
    next(error)
  }
}

//*DELETE - eliminar spot, solo si eres ADMIN
const deleteSpot = async (req, res, next) => {
  try {
    const { id } = req.params
    //!falta check si eres user o admin
    const deletedSpot = await Spot.findByIdAndDelete(id)

    //elimino imagen en Cloudinary
    deletedSpot.image ? deleteFileCloudinary(deletedSpot.image) : null

    return res.status(200).json({
      message: 'Spot deleted successfully',
      spot: deletedSpot
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getSpots,
  createSpot,
  updateSpot,
  deleteSpot
}
