const Area = require('../models/Area');

//GET
const getAreas = async (req, res, next) => {
  try {
    const areas = await Area.find().populate('spots');
    return res.status(200).json(areas);
  } catch (error) {
    next(error);
  }
};

//POST
const createArea = async (req, res, next) => {
  try {
    const newArea = new Area(req.body);
    const createdArea = await newArea.save();
    return res
      .status(201)
      .json({ message: 'Area created successfully', area: createdArea });
  } catch (error) {
    next(error);
  }
};

//PUT
const updateArea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldArea = await Area.findById(id);
    const modifiedArea = new Area(req.body);
    modifiedArea._id = id;

    //aseguro que los datos array [] no den undefined
    const spots = req.body.spots || [];
    modifiedArea.spots = [...oldArea.spots, ...spots];

    const updatedArea = await Area.findByIdAndUpdate(id, modifiedArea, {
      new: true
    });
    return res.status(200).json(updatedArea);
  } catch (error) {
    next(error);
  }
};

//DELETE
const deleteArea = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedArea = await Area.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Area deleted successfully',
      area: deletedArea
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAreas,
  createArea,
  updateArea,
  deleteArea
};
