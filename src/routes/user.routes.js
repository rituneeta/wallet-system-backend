import express from 'express';
import { signUpController, loginController } from "../controllers/user/userAuth.controller.js";
import {validateBody} from "../middleware/joiSchemaValidation.js";
import { signupSchema, loginSchema } from "../apiSchema/userSchema.js";
import  { validateUserToken } from "../middleware/tokenValidate.js";

const userRouter = express.Router();

//creating the user account - sign up
userRouter.post('/signup',  validateBody(signupSchema), signUpController);

userRouter.post('/login', validateBody(loginSchema), validateUserToken, loginController);

export default userRouter;