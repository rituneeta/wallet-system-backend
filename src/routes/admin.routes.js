import express from 'express';
import { getUsersListController, getUserWalletListController , getUserTransactionListController} from "../controllers/admin/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get('/users', getUsersListController);

adminRouter.get('/users-wallet', getUserWalletListController);

adminRouter.get('/users-transaction', getUserTransactionListController);

export default adminRouter;