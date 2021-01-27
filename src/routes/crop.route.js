const express = require('express');
const route = express.Router();
const cropController = require('../app/controllers/CropControllers');

route.get('/:id/edit', cropController.edit);

route.post('/added', cropController.added);
route.get('/:slug', cropController.show);
route.put('/:id', cropController.update);
route.delete('/:id', cropController.delete);
route.get('/', cropController.show);
module.exports = route;
