const express = require('express');
const route = express.Router();
const seedController = require('../app/controllers/SeedControllers');

route.get('/all', seedController.all);
module.exports = route;
