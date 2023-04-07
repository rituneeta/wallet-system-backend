import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"
import { getUserListsService , getUserWalletListsService, getUserTransactionListsService} from '../../services/admin/adminService.js';

export const getUserLists = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUserListsService(userId);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}
 
export const getUserWalletLists = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUserWalletListsService(userId);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const getUserTransactionLists = async (req, res)=>{
    try {
        const responseFromService = await getUserTransactionListsService(req.query);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}