// Description: Site controller for handling site pages.
// Includes home page, search page, contact page, etc.

const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('home', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /search
    async search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
