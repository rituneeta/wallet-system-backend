import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js";
import { addWalletService, sendWalletService, getPassbookService } from '../../services/wallet/wallet.service.js';

export const addWalletController = async (req, res) => {
    try {
        const responseFromService = await addWalletService(req.user.id, req.body);
        successResponse(req, res, responseFromService, MESSAGES.add_money);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const sendWalletController = async (req, res) => {
    try {
        const responseFromService = await sendWalletService(req.user.id, req.body);
        successResponse(req, res, responseFromService, MESSAGES.pay_money);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const getPassbookController = async (req, res) => {
    try {
        const responseFromService = await getPassbookService(req.user.id);
        successResponse(req, res, responseFromService, MESSAGES.fetch_passbook);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}