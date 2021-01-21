const express = require('express');
const route = express.Router();
const accController = require('../app/controllers/AccControllers');

route.get('/login', accController.login);
route.post('/login', accController.submitlogin);
route.get('/register', accController.register);
module.exports = route;
