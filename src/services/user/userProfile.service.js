import { userModel } from "../../models/user.model.js"
import { selectOne } from '../../queryService/queryService.js';
import _ from 'lodash';

export const getProfileService = async (user) => {
    let response = await selectOne(userModel, { id: user.id })
    return _.pick(response, ['id', 'firstName', 'lastName', 'email', 'passcode', 'createdAt', 'updatedAt'])
}