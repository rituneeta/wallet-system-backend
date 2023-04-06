import { userModel } from "../../models/user.model.js"
import {selectAll} from '../../queryService/queryService.js';
import _ from 'lodash';

export const getUserListsService = async(userId) => {
    const condition = userId ? { id : userId }: {}
    return await selectAll(userModel, condition);
}