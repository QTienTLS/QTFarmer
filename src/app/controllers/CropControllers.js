const Crop = require('../models/Crop');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
class CropControllers {
    show(req, res) {
        res.send('Crop');
    }
    added(req, res, next) {
        const crop = new Crop(req.body);
        crop.save()
            .then(() => res.redirect('/'))
            .catch((erro) => {});
    }
    edit(req, res, next) {
        Crop.findById(req.params.id).then((crop) =>
            res.render('crops/edit', {
                crop: mongooseToObject(crop),
            }),
        );
    }
    update(req, res, next) {
        Crop.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/list/crops'))
            .catch(next);
    }
    delete(req, res, next) {
        Crop.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CropControllers();
