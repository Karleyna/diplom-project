const Router = require('express');
const router = new Router();
const postsController = require('../controllers/postsController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('admin','trainer'), postsController.create);
router.get('/', postsController.getAll);
router.get('/:id', postsController.getOne);

module.exports = router;