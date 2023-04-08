import express from 'express';
import userRouter from './user.routes.js';
import adminRouter from './admin.routes.js';
import walletRouter from './wallet.routes.js';

const router = express.Router();

router.use('/user', userRouter);

router.use('/wallet',walletRouter);

router.use('/admin', adminRouter);

export default router;