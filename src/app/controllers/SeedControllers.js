const Crop = require('../models/Crop');
const Seed = require('../models/Seed');

const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
class SeedControllers {
    all(req, res, next) {
        Crop.find({}, function (err, crop) {
            if (err) return handleError(err);
            crop = mutipleMongooseToObject(crop);
            res.render('list/list-view-crops', { crop });
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
    detail(req, res, next) {
        Seed.findOne({ _id: req.params.id }, function (err, seed) {
            if (err) return handleError(err);
            seed = mongooseToObject(seed);
            const query = Seed.find({ type: seed.type }).limit(4);
            query.exec(function (err, same) {
                if (err) return handleError(err);
                same = mutipleMongooseToObject(same);
                res.render('seeds/detail', { seed, same });
            });

            //res.json(seed);
        });
    }
}

module.exports = new SeedControllers();
