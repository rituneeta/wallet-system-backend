import { signUpService, loginService } from '../../services/user/userAuth.service.js';
import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"

export const signUpController = async (req, res) => {
    try {
        const responseFromService = await signUpService(req.body);
        successResponse(req, res, responseFromService, MESSAGES.signup_sucsess);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const loginController = async (req, res) => {
    try {
        const responseFromService = await loginService(req.body);
        successResponse(req, res, responseFromService, MESSAGES.login_success);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}