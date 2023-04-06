import { getProfileService } from '../../services/user/userProfile.service.js';
import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"

export const getProfileDetails = async (req, res) => {
    try {
        const responseFromService = await getProfileService(req.user);
        successResponse(res, responseFromService, MESSAGES.profile_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}