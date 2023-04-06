import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"
import { getUserListsService } from '../../services/admin/adminService.js';

export const getUserLists = async (req, res) => {
    try {
        const userId = req.query?.userId
        const responseFromService = await getUserListsService(userId);
        successResponse(res, responseFromService, MESSAGES.users_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}