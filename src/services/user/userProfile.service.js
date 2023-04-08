import _ from 'lodash';
import { userModel } from "../../models/users.model.js"
import { selectOne, updateData } from '../../queryService/queryService.js';
import { MESSAGES } from '../../constants/index.js';
import { bcryptData } from '../../utils/appUtils.js';


export const getProfileDataService = async (user) => {
    const response = await selectOne(userModel, { id: user.id })
    return _.pick(response, ['id', 'first_name', 'last_name', 'email', 'passcode', 'account_number', 'createdAt', 'updatedAt'])
}

export const updateProfileService = async (params, user) => {
    let existUser = await selectOne(userModel, { id: user.id })
    if (!_.isEmpty(existUser)) {
        let update = {}
        if (params.first_name) {
            update.first_name = params.first_name
        }
        if (params.last_name) {
            update.last_name = params.last_name
        }
        if (params.passcode) {
            update.passcode = await bcryptData(params.passcode);
        }
        if (params.email) {
            let existUserEmail = await selectOne(userModel, { email: params.email })
            if (!_.isEmpty(existUserEmail)) {
                throw new Error(MESSAGES.email_exist)
            } else {
                update.email = params.email;
            }
        }
        let query = { where: { id: user.id } }
        update.model = userModel;
        return updateData(update, query);
    } else {
        throw new Error(MESSAGES.user_not_found)
    }
}