const Acc = require('../models/Account');
const { mutipleMongooseToObject } = require('../../tools/mongoose');
const { mongooseToObject } = require('../../tools/mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const alert = require('alert');
var help;
class AccControllers {
    login(req, res, next) {
        help = {
            userHelp: 'Tên đăng nhập của bạn',
        };
        res.render('account/login', { help });
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
            if (acc) {
                if (req.body.password == acc.password) {
                    req.session.User = {
                        display: acc.display,
                        img: acc.avatar,
                        key: acc.modder,
                    };
                    res.redirect('/');
                } else {
                    help = {
                        userHelp:
                            'Tên đăng nhập hoặc mật khẩu không đúng ! Vui lòng thử lại',
                    };
                    res.render('account/login', { help });
                }
            } else {
                help = {
                    userHelp:
                        'Tên đăng nhập hoặc mật khẩu không đúng ! Vui lòng thử lại',
                };
                res.render('account/login', { help });
            }
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
                    userHelp:
                        'Tài khoản đã tồn tại ! vui lòng chọn tên đăng nhập khác',
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
                    help = {
                        userHelp:
                            'Đăng ký thành công ! Vui lòng đăng nhập tài khoản bạn vừa tạo !',
                    };
                    res.render('account/login', { help });
                });
            }
        });
    }
}
module.exports = new AccControllers();
