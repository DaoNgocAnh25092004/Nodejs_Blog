const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const [courses, countCourses] = await Promise.all([
                Course.find({}).sortable(req),
                Course.countDocumentsWithDeleted({ deleted: true }),
            ]);

            res.render('me/stored-courses', {
                countCourses,
                courses: multipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /me/trash/courses
    async trashCourses(req, res, next) {
        try {
            const courses = await Course.findWithDeleted({
                deleted: true,
            }).sortable(req);
            res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new MeController();
