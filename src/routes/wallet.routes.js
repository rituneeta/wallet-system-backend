import express from 'express';
import { addWalletController, sendWalletController, getPassbookController } from '../controllers/wallet/wallet.controller.js';
import { validateBody } from "../middleware/joiSchemaValidation.js";
import { validateUserToken } from "../middleware/tokenValidate.js";
import { walletAddSchema, walletPaySchema } from '../apiSchema/walletSchema.js';

const walletRouter = express.Router();

walletRouter.post("/add-money", validateBody(walletAddSchema), validateUserToken, addWalletController);

walletRouter.post("/pay-money", validateBody(walletPaySchema), validateUserToken, sendWalletController);

walletRouter.get('/passbook', validateUserToken, getPassbookController);

export default walletRouter;