const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.post('/store', coursesController.store);

router.get('/create', coursesController.create);

// should stand before /:id, /:slug
router.post('/handle-form-actions', coursesController.handleFormActions);

router.get('/:slug', coursesController.show);

router.put('/:id', coursesController.update);

router.delete('/:id', coursesController.delete);

router.delete('/:id/force', coursesController.deleteForce);

router.patch('/:id/restore', coursesController.restore);

router.get('/:id/edit', coursesController.edit);

router.get('/', coursesController.index);

module.exports = router;
