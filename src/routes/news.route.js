const express = require('express');
const route = express.Router();
const newsController = require('../app/controllers/NewsControllers');

route.get('/', newsController.index);

module.exports = route;
