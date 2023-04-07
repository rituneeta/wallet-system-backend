import { getProfileDataService , updateProfileService} from '../../services/user/userProfile.service.js';
import { successResponse, errorResponse } from '../../utils/appUtils.js';
import { MESSAGES, CODE } from "../../constants/index.js"

export const getProfileDataController = async (req, res) => {
    try {
        const responseFromService = await getProfileDataService(req.user);
        successResponse(res, responseFromService, MESSAGES.profile_fetched);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}

export const updateProfileController = async (req, res) => {
    try {
        const responseFromService = await updateProfileService(req.body,req.user);
        successResponse(res, responseFromService, MESSAGES.profile_updated);
    } catch (error) {
        errorResponse(res, error, CODE.error_code);
    }
}