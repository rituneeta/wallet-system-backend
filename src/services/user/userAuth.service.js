import _ from "lodash";
import { userTokenResponse } from "../../utils/token-response.js";
import { bcryptPassword } from '../../utils/appUtils.js';
import { selectOne, addData } from '../../queryService/queryService.js';
import { userModel } from '../../models/user.model.js';
import { MESSAGES } from '../../constants/index.js';

export const signUpService = async (params) => {
    const existingUser = await selectOne(userModel, { email: params.email.toLowerCase() })
    if (_.isEmpty(existingUser)) {
        if (params.password) {
            params.password = await bcryptPassword(params.password);
            params.email = params.email.toLowerCase();

            let newUser = await addData(userModel, params);
            let userData = newUser.get({ plain: true });

            const response = _.pick(userData, ['id', 'firstName', 'lastName', 'email', 'passcode', 'createdAt', 'updatedAt'])
            delete userData.password;
            let token = await userTokenResponse(newUser);
            return { ...token, ...response };
        }
    } else {
        throw new Error(MESSAGES.acc_already_exists);
    }
}