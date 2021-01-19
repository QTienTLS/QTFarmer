const Crop = require('../models/Crop');
const { mutipleMongooseToObject } = require('../../tools/mongoose');

class SiteControllers {
    home(req, res, next) {
        Crop.find({})
            .then((crops) =>
                res.render('home', {
                    crops: mutipleMongooseToObject(crops),
                }),
            )
            .catch(next);
    }
}

module.exports = new SiteControllers();
