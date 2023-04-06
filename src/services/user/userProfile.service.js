import { userModel } from "../../models/user.model.js"
import { selectOne, updateData } from '../../queryService/queryService.js';
import _ from 'lodash';

export const getProfileService = async (user) => {
    let response = await selectOne(userModel, { id: user.id })
    return _.pick(response, ['id', 'firstName', 'lastName', 'email', 'passcode', 'createdAt', 'updatedAt'])
}

export const updateUserProfileService = async(params, user) => {
    let existUser = await selectOne(userModel, { id: user.id })
    if (!_.isEmpty(existUser)){
        let update = {}
        if (params.firstName && params.firstName !== existUser.firstName){
            update.firstName = params.firstName
        }
        if (params.lastName && params.lastName !== existUser.lastName){
            update.lastName = params.lastName
        }
        if (params.email && params.email !== existUser.email){
            update.email = params.email
        }
        if (params.passcode && params.passcode !== existUser.passcode){
            update.passcode = params.passcode
        }
        let query = {where: { id: user.id}}
        update.model = userModel;
        return updateData(update,query);
    } else {
        throw new Error(constants.MESSAGES.user_not_found)
    }
}