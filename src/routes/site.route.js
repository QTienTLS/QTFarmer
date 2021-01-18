const express = require('express');
const route = express.Router();
const 
siteController = require('../app/controllers/SiteControllers');

route.use('/', siteController.home);

module.exports = route;
