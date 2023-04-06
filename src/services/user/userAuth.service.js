import _ from "lodash";
import { userTokenResponse } from "../../utils/token-response.js";
import { bcryptPassword, comparePassword } from '../../utils/appUtils.js';
import {selectOne, addData} from '../../queryService/queryService.js';
import { userModel } from '../../models/user.model.js';
import { MESSAGES } from '../../constants/index.js';
import { walletModel } from "../../models/wallet.model.js";

export const signUpService = async (params) => {
    const existingUser = await selectOne(userModel, { email: params.email.toLowerCase() })
    if (_.isEmpty(existingUser)) {
        if (params.password) {
            params.password = await bcryptPassword(params.password);
            params.email = params.email.toLowerCase();

            let newUser = await addData(userModel, params);
            let userData = newUser.get({ plain: true });
            await addData(walletModel, { userId: userData.id, amount: 0, phoneNumber: userData.phoneNumber})
            const response = _.pick(userData, ['id', 'firstName', 'lastName', 'email', 'passcode', 'phoneNumber', 'createdAt', 'updatedAt'])
            delete userData.password;
            let token = await userTokenResponse(newUser);
            return { ...token, ...response };
        }
    } else {
        throw new Error(MESSAGES.acc_already_exists);
    }
}

export const loginService = async (params) => {
    let userDetails = await selectOne(userModel, { email: params.email })

    if (userDetails) {
        let isPasswordMatch = await comparePassword(params.password, userDetails.password)
        if (isPasswordMatch) {
            let token = await userTokenResponse(userDetails);
            const response = _.pick(userDetails, ['id', 'firstName', 'lastName', 'email','passcode', 'phoneNumber', 'createdAt', 'updatedAt'])
            return { ...token, ...response }
        } else {
            throw new Error(MESSAGES.invalid_password)
        }
    } else {
        throw new Error(MESSAGES.user_not_found)

    }
}