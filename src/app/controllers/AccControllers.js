const Acc = require('../models/Account');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
class AccControllers {
    login(req, res, next) {
        res.render('account/login');
    }
    register(req, res, next) {
        res.render('account/register');
    }
    submitlogin(req, res, next) {
        res.json(req.body);
    }
}
module.exports = new AccControllers();
