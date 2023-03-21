const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const certificateRouter = require('./certificateRouter');
const postsRouter = require('./postsRouter');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/certificate', certificateRouter);
router.use('/posts', postsRouter);



module.exports = router;