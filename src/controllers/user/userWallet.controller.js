import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js";
import { addWalletService, sendWalletService, getPassbookService } from '../../services/user/userWallet.service.js';

export const addWalletController  = async (req, res) => {
    try {
        const responseFromService = await addWalletService(req?.user?.id, req.body);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const sendWalletController = async (req, res) => {
    try {
        const responseFromService = await sendWalletService(req?.user?.id, req.body);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const getPassbookController = async(req,res) => {
    try {
        const receiverUserId = req.query?.receiverUserId
        const responseFromService = await getPassbookService(req.user.id, receiverUserId);
        successResponse(res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}