import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js";
import { addWalletService } from '../../services/user/userWallet.service.js';

export const addWalletController  = async (req, res) => {
    try {
        const responseFromService = await addWalletService(req?.user?.id, req.body);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}