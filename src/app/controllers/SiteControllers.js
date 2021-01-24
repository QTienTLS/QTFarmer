const Crop = require('../models/Crop');
const { mutipleMongooseToObject } = require('../../tools/mongoose');

class SiteControllers {
    home(req, res, next) {
        Crop.find({})
            .limit(6)
            .then((crops) =>
                res.render('home', {
                    crops: mutipleMongooseToObject(crops),
                }),
            )
            .catch(next);
    }
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteControllers();
