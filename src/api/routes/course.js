const { isAdmin } = require('../../middlewares/isAuth');
const {
  getCourses,
  updateCourse,
  createCourse,
  deleteCourse
} = require('../controllers/course');

const coursesRouter = require('express').Router();

coursesRouter.get('/', getCourses);
coursesRouter.put('/:id', isAdmin, updateCourse);
coursesRouter.post('/', isAdmin, createCourse);
coursesRouter.delete('/:id', isAdmin, deleteCourse);

module.exports = coursesRouter;
