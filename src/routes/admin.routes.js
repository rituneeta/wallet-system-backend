import express from 'express';
import { getUserLists, getUserWalletLists } from "../controllers/admin/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get('/users-list', getUserLists);

adminRouter.get('/users-wallet', getUserWalletLists);


export default adminRouter;