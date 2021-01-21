const express = require('express');
const route = express.Router();
const siteController = require('../app/controllers/SiteControllers');

route.get('/about', siteController.about);
route.get('/', siteController.home);

module.exports = route;
