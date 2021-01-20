const express = require('express');
const route = express.Router();
const listController = require('../app/controllers/ListControllers');

route.get('/crops', listController.listCrops);
module.exports = route;
