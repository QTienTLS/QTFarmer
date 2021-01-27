const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const cropsRouter = require('./crop.route');
const accRouter = require('./account.route');
const seedRouter = require('./seed.route');
const adminRouter = require('./admin.route');
function route(app) {
    app.use('/admin', function (req, res, next) {
        if (req.session.User == null || req.session.User.key == false)
            res.render('admin/stop');
        else {
            next();
        }
    });
    app.use('/admin', adminRouter);
    app.use('/seed', seedRouter);
    app.use('/account', accRouter);
    app.use('/news', newsRouter);
    app.use('/crops', cropsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
