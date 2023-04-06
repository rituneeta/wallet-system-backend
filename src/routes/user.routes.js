import express from 'express';
import { signUpController } from "../controllers/user/userAuth.controller.js";
import {validateBody} from "../middleware/joiSchemaValidation.js";
import { signupSchema } from "../apiSchema/userSchema.js";

const userRouter = express.Router();

//creating the user account - sign up
userRouter.post('/signup',  validateBody(signupSchema), signUpController);

export default userRouter;