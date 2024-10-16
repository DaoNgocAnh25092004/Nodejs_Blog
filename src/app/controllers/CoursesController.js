const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('courses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', {
                course: course.toObject(),
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CoursesController();
