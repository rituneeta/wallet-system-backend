import express from 'express';
import { signUpController, loginController } from "../controllers/user/userAuth.controller.js";
import { getProfileDataController, updateProfileController } from "../controllers/user/userProfile.controller.js";
import { validateBody } from "../middleware/joiSchemaValidation.js";
import { validateUserToken } from "../middleware/tokenValidate.js";
import { signupSchema, loginSchema, userProfileUpdateSchema } from "../apiSchema/userSchema.js";

const userRouter = express.Router();

userRouter.post('/signup', validateBody(signupSchema), signUpController);

userRouter.post('/login', validateBody(loginSchema), loginController);

userRouter.get('/profile', validateUserToken, getProfileDataController);

userRouter.patch('/update-profile', validateBody(userProfileUpdateSchema), validateUserToken, updateProfileController);

export default userRouter;