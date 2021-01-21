const Crop = require('../models/Crop');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
class SeedControllers {
    all(req, res, next) {
        res.render('seeds/all');
    }
}

module.exports = new SeedControllers();
