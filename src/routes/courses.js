const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.post('/store', coursesController.store);

router.get('/create', coursesController.create);

router.get('/:slug', coursesController.show);

router.put('/:id', coursesController.update);

router.get('/:id/edit', coursesController.edit);

router.get('/', coursesController.index);

module.exports = router;
