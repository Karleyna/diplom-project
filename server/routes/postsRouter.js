const Router = require('express');
const router = new Router();
const postsController = require('../controllers/postsController');
const postPropertyController = require('../controllers/postPropertyController');
const checkRole = require('../middleware/checkRoleMiddleware');
const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/', authMiddleware, checkRole('admin', 'trainer'), postsController.create);
router.get('/', postsController.getAll);
router.get('/:id', postsController.getOne);
router.put('/:id', authMiddleware, checkRole('admin', 'trainer'), postsController.update);
router.delete('/:id',authMiddleware, checkRole('admin', 'trainer'),  postsController.delete);

//Properties
router.get('/:postId/property/', postPropertyController.getAll)
router.get('/:postId/property/:id', postPropertyController.getOne)
router.post('/:postId/property/', authMiddleware, checkRole('admin', 'trainer'), postPropertyController.create)
router.put('/:postId/property/:id', authMiddleware, checkRole('admin', 'trainer'), postPropertyController.update)
router.delete('/:postId/property/:id', authMiddleware, checkRole('admin', 'trainer'), postPropertyController.delete)


module.exports = router;