const express = require('express');
const route = express.Router();
const seedController = require('../app/controllers/SeedControllers');

route.get('/all', seedController.all);
route.get('/:id/detail', seedController.detail);
route.get('/:slug', seedController.show);

module.exports = route;
