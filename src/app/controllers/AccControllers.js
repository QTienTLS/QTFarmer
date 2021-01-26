const Acc = require('../models/Account');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const alert = require('alert');
var help;
class AccControllers {
    login(req, res, next) {
        res.render('account/login');
    }
    register(req, res, next) {
        help = {
            userHelp: 'Nhập vào tên đăng nhập',
            passHelp: 'Nhập mật khẩu của bạn',
            repassHelp: 'Nhập lại mật khẩu của bạn',
        };
        res.render('account/register', { help });
    }
    submitlogin(req, res, next) {
        Acc.findOne({ user: req.body.user }, function (err, acc) {
            if (err) handleError(err);
            bodyParser.json();
            if (req.body.password == acc.password) {
                req.session.User = {
                    display: acc.display,
                    img: acc.avatar,
                };
            }
            res.redirect('/');
        });
        //res.json(req.body);
    }
    logout(req, res) {
        req.session.destroy(function (err) {
            return res.redirect('/');
        });
    }
    postReg(req, res, next) {
        bodyParser.json();
        Acc.findOne({ user: req.body.user }, function (err, acc) {
            if (err) return handleError(err);
            if (acc) {
                help = {
                    userHelp: acc.user,
                    passHelp: 'Nhập mật khẩu của bạn',
                    repassHelp: 'Nhập lại mật khẩu của bạn',
                };
                res.render('account/register', { help });
            } else if (req.body.password != req.body.repassword) {
                // help = {
                //     userHelp: "Nhập vào tên đăng nhập",
                //     passHelp: "Nhập mật khẩu của bạn",
                //     repassHelp: "Mật khẩu không khớp vui lòng nhập lại !"
                // }
                help = {
                    userHelp: 'Nhập vào tên đăng nhập',
                    passHelp: req.body.password,
                    repassHelp: req.body.repassword,
                };
                res.render('account/register', { help });
            } else {
                const newUser = new Acc(req.body);
                newUser.save(function (err) {
                    if (err) return handleError(err);
                    res.redirect('/account/login');
                });
            }
        });
    }
}
module.exports = new AccControllers();
