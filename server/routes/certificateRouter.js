const Router = require('express');
const router = new Router();
const certificateController = require('../controllers/certificateController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('admin','trainer'), certificateController.create);
router.get('/', certificateController.getAll);
router.get('/:id', certificateController.getOne);

module.exports = router;