import express from 'express';
import userRouter from './user.routes.js';
import adminRouter from './admin.routes.js';

const router = express.Router();

router.use('/user', userRouter);

router.use('/admin', adminRouter)

export default router;