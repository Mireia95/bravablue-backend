const { isAdmin } = require('../../middlewares/isAuth');
const {
  getAreas,
  updateArea,
  createArea,
  deleteArea
} = require('../controllers/area');

const areasRouter = require('express').Router();

areasRouter.get('/', getAreas);
areasRouter.put('/:id', isAdmin, updateArea);
areasRouter.post('/', isAdmin, createArea);
areasRouter.delete('/:id', isAdmin, deleteArea);

module.exports = areasRouter;
