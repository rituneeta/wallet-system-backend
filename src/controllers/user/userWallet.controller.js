import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js";
import { addWalletService, sendWalletService, getPassbookService, getLoggingService } from '../../services/user/userWallet.service.js';

export const addWalletController = async (req, res) => {
    try {
        const responseFromService = await addWalletService(req.user.id, req.body);
        successResponse(req, res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const sendWalletController = async (req, res) => {
    try {
        const responseFromService = await sendWalletService(req.user.id, req.body);
        successResponse(req, res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const getPassbookController = async (req, res) => {
    try {
        const responseFromService = await getPassbookService(req.query);
        successResponse(req, res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const getLoggingController = async (req, res) => {
    try {
        const responseFromService = await getLoggingService();
        successResponse(req, res, responseFromService, MESSAGES.success);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}