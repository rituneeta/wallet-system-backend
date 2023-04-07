import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"
import { getUsersListService , getUserWalletListService, getUserTransactionListService} from '../../services/admin/adminService.js';

export const getUsersListController = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUsersListService(userId);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}
 
export const getUserWalletListController = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUserWalletListService(userId);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const getUserTransactionListController = async (req, res)=>{
    try {
        const responseFromService = await getUserTransactionListService(req.query);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}