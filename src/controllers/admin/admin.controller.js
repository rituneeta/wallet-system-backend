import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"
import { getUsersListService, getUserWalletListService, getUserTransactionListService } from '../../services/admin/adminService.js';

export const getUsersListController = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUsersListService(userId);
        successResponse(req, res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const getUserWalletListController = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUserWalletListService(userId);
        successResponse(req, res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}

export const getUserTransactionListController = async (req, res) => {
    try {
        const responseFromService = await getUserTransactionListService(req.query);
        successResponse(req, res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(req, res, error, CODE.error_code);
    }
}