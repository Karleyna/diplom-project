const Router = require('express');
const router = new Router();
const postsController = require('../controllers/postsController');
const postPropertyController = require('../controllers/postPropertyController');
const checkRole = require('../middleware/checkRoleMiddleware');
const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/',  postsController.create);
router.get('/', postsController.getAll);
router.get('/:id', postsController.getOne);

//Properties
router.get('/:postId/property/', postPropertyController.getAll)
router.get('/:postId/property/:id', postPropertyController.getOne)
router.post('/:postId/property/', postPropertyController.create)
router.put('/:postId/property/:id', authMiddleware, checkRole, postPropertyController.update)
router.delete('/:postId/property/:id', authMiddleware, checkRole, postPropertyController.delete)


module.exports = router;