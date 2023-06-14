const Router = require('express');
const router = new Router();
const certificateController = require('../controllers/certificateController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('trainer'), certificateController.create);
router.get('/', certificateController.getAll);
router.get('/:id', certificateController.getOne);
router.put('/:id', checkRole('trainer'), certificateController.update);
router.delete('/:id', checkRole('trainer'), certificateController.delete);

module.exports = router;