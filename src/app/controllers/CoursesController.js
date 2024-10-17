const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

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
                course: mongooseToObject(course),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
            const course = new Course(formData);
            await course.save();
            res.redirect('/me/stored/courses');
        } catch (err) {
            next(err);
        }
    }

    // [GET] /courses/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render('courses/edit', {
                course: mongooseToObject(course),
            });
        } catch (err) {
            next(err);
        }
    }

    // [PUT] /courses/:id
    async update(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
            await Course.findByIdAndUpdate(req.params.id, formData);
            res.redirect('/me/stored/courses');
        } catch (err) {
            next(err);
        }
    }

    // [DELETE] /courses/:id
    async delete(req, res, next) {
        try {
            await Course.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }

    // [PATCH] /courses/:id/restore
    async restore(req, res, next) {
        try {
            await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }

    // [DELETE] /courses/:id/force
    async deleteForce(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CoursesController();
