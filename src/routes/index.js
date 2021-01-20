const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const cropsRouter = require('./crop.route');
const listRouter = require('./list.route');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/list', listRouter);
    app.use('/crops', cropsRouter);
    app.use('/', siteRouter);
}
module.exports = route;
