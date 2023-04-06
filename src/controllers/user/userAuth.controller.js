import { signUpService, loginService } from '../../services/user/userAuth.service.js';
import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"

export const signUpController = async (req, res) => {
    try {
        const responseFromService = await signUpService(req.body);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const loginController = async (req, res) => {
    try {
        const responseFromService = await loginService(req.body);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}