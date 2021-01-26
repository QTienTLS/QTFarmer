const express = require('express');
const route = express.Router();
const accController = require('../app/controllers/AccControllers');

route.get('/logout', accController.logout);
route.get('/login', accController.login);
route.post('/login', accController.submitlogin);
route.get('/register', accController.register);
route.post('/register', accController.postReg);
module.exports = route;
