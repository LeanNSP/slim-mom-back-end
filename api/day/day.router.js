const { Router } = require('express');
const authorize = require('../auth/middleware/authorize');

const DayController = require('./day.controller');

const dayRouter = Router();

dayRouter.post('/', authorize, DayController.validateAddProduct, DayController.addProductPerDay); // TODO: authorize,

dayRouter.delete('/', DayController.deleteProductPerDay);

dayRouter.post('/info', authorize, DayController.infoPerDay);

module.exports = dayRouter;
