const Acc = require('../models/Account');
const Crop = require('../models/Crop');
const Seed = require('../models/Seed');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
var help;
class AdminControllers {
    admin(req, res, next) {
        Acc.find({}, function (err, acc) {
            if (err) return handlerError(err);
            acc = mutipleMongooseToObject(acc);
            Crop.find({}, function (err, crop) {
                if (err) return handlerError(err);
                crop = mutipleMongooseToObject(crop);
                Seed.find({}, function (err, seed) {
                    if (err) return handlerError(err);
                    seed = mutipleMongooseToObject(seed);
                    res.render('admin/admin', { acc, crop, seed });
                });
            });
        });
    }
    cropAdmin(req, res, next) {
        Crop.find({}).then((crop) =>
            res.render('list/list-crops', {
                crop: mutipleMongooseToObject(crop),
            }),
        );
    }
    seedAdmin(req, res, next) {
        Seed.find({}, function (err, seed) {
            if (err) return handlerError(err);
            seed = mutipleMongooseToObject(seed);
            Crop.find({}, function (err, crop) {
                if (err) return handlerError(err);
                crop = mutipleMongooseToObject(crop);
                res.render('list/list-seed', { seed, crop });
            });
        });
    }
    addCrop(req, res, next) {
        res.render('crops/create');
    }
    addSeed(req, res, next) {
        Crop.find({}, function (err, crop) {
            if (err) return handlerError(err);
            crop = mutipleMongooseToObject(crop);
            var selectedCrop;
            selectedCrop = req.params.type;
            res.render('seed/create', { crop, selectedCrop });
        });
    }
}
module.exports = new AdminControllers();
