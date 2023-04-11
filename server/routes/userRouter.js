const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/registration', userController.registration);
router.post('/registration-trainer',checkRoleMiddleware('admin'), userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.put('/users', userController.update);
router.delete('/users/:id', userController.delete);


module.exports = router;