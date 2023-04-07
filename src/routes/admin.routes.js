import express from 'express';
import { getUserLists, getUserWalletLists , getUserTransactionLists} from "../controllers/admin/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get('/users-list', getUserLists);

adminRouter.get('/users-wallet', getUserWalletLists);

adminRouter.get('/users-transaction', getUserTransactionLists);

export default adminRouter;