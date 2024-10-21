const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            let courseQuery = Course.find({});

            if (req.query.hasOwnProperty('_sort')) {
                courseQuery = courseQuery.sort({
                    [req.query.column]: req.query.type,
                });
            }

            const [courses, countCourses] = await Promise.all([
                courseQuery,
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
            const courses = await Course.findWithDeleted({ deleted: true });
            res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new MeController();
