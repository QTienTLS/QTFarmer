const express = require('express');
const route = express.Router();
const seedController = require('../app/controllers/SeedControllers');

route.get('/all', seedController.all);
route.get('/:id/detail', seedController.detail);
route.get('/:slug', seedController.show);
route.post('/added', seedController.added);
route.delete('/:id', seedController.delete);
route.get('/:id/edit', seedController.edit);
route.put('/:id', seedController.update);
module.exports = route;
