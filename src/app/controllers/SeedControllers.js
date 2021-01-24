const Crop = require('../models/Crop');
const Seed = require('../models/Seed');

const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
class SeedControllers {
    all(req, res, next) {
        Crop.find({}, function (err, crop) {
            if (err) return handleError(err);
            crop = mutipleMongooseToObject(crop);
            Seed.find({ type: crop[0].slug }, function (err, seed) {
                if (err) return handleError(err);
                seed = mutipleMongooseToObject(seed);
                res.render('seeds/all', { crop, seed });
            });
        });
    }
    show(req, res, next) {
        Crop.find({}, function (err, crop) {
            if (err) return handleError(err);
            crop = mutipleMongooseToObject(crop);
            Seed.find({ type: req.params.slug }, function (err, seed) {
                if (err) return handleError(err);
                seed = mutipleMongooseToObject(seed);

                res.render('seeds/show-list', {
                    crop,
                    seed,
                    seedtype: req.params.slug,
                });
            });
        });
    }
}

module.exports = new SeedControllers();
