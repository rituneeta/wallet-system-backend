import express from 'express';
import { signUpController, loginController } from "../controllers/user/userAuth.controller.js";
import { getProfileDetails, updateUserProfile } from "../controllers/user/userProfile.controller.js";
import { validateBody } from "../middleware/joiSchemaValidation.js";
import { signupSchema, loginSchema, userProfileUpdateSchema } from "../apiSchema/userSchema.js";
import { walletSchema } from '../apiSchema/walletSchema.js';
import { validateUserToken } from "../middleware/tokenValidate.js";
import { addWalletController } from '../controllers/user/userWallet.controller.js';

const userRouter = express.Router();

//creating the user account - sign up
userRouter.post('/signup', validateBody(signupSchema), signUpController);

userRouter.post('/login', validateBody(loginSchema), validateUserToken, loginController);

userRouter.get('/profile', validateUserToken, getProfileDetails);

userRouter.patch('/update-profile', validateBody(userProfileUpdateSchema), validateUserToken, updateUserProfile);

userRouter.post("/wallet-add", validateBody(walletSchema), validateUserToken, addWalletController)

export default userRouter;