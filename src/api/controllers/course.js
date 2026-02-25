//importo modelo creado
const Course = require('../models/Course');

//*GET - obtener cursos para pintarlos
const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

//*POST - para crearlos, solo si eres ADMIN
const createCourse = async (req, res, next) => {
  try {
    const newCourse = new Course(req.body);
    const createdCourse = await newCourse.save();
    return res
      .status(201)
      .json({ message: 'Course created successfully', course: createdCourse });
  } catch (error) {
    next(error);
  }
};

//*PUT - actualizar curso, solo si eres ADMIN
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedCourse = new Course(req.body);
    modifiedCourse._id = id;
    const updatedCourse = await Course.findByIdAndUpdate(id, modifiedCourse, {
      new: true
    });
    return res.status(200).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

//*DELETE - eliminar curso, solo si eres ADMIN
const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    //!falta check si eres user o admin
    const deletedCourse = await Course.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Course deleted successfully',
      course: deletedCourse
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse
};
