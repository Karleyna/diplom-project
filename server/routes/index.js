const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const certificateRouter = require('./certificateRouter');
const postsRouter = require('./postsRouter');
const checkRole = require("../middleware/checkRoleMiddleware");

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/certificate', certificateRouter);
router.use('/posts', postsRouter);
router.use('/admin',checkRole('admin','trainer'))



module.exports = router;