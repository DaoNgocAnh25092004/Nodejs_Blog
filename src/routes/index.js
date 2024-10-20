const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    // Routes me
    app.use('/me', meRouter);

    // Routes views
    app.use('/news', newsRouter);

    // Routes courses
    app.use('/courses', coursesRouter);

    // Routes site: home, search, contact...
    // Should be at the end of the list of routes
    app.use('/', siteRouter);
}

module.exports = route;
