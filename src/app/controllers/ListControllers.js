const Crop = require('../models/Crop');
const { mutipleMongooseToObject } = require('../../tools/mongoose');

class ListControllers {
    listCrops(req, res, next) {
        Crop.find({}).then((crop) =>
            res.render('list/list-crops', {
                crop: mutipleMongooseToObject(crop),
            }),
        );
    }
}

module.exports = new ListControllers();
