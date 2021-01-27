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
    added(req, res, next) {
        Crop.findOne({ slug: req.body.type }, function (err, crop) {
            if (err) return handleError(err);
            const seed = new Seed(req.body);
            seed.image = crop.image;

            seed.save(function (err) {
                var path = '/admin/create-seed/' + seed.type;
                res.redirect(path);
            });
        });
    }
    delete(req, res, next) {
        Seed.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    edit(req, res, next) {
        Seed.findById(req.params.id, function (err, seed) {
            Crop.find({}, function (err, crop) {
                seed = mongooseToObject(seed);
                crop = mutipleMongooseToObject(crop);
                res.render('seed/edit', { seed, crop });
            });
        });
    }
    update(req, res, next) {
        Seed.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/seed'))
            .catch(next);
    }
}

module.exports = new SeedControllers();
