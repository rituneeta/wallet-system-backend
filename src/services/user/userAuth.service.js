import _ from "lodash";
import  Sequelize  from "sequelize";
import { userTokenResponse } from "../../utils/token-response.js";
import { bcryptData, comparePassword } from '../../utils/appUtils.js';
import {selectOne, addData} from '../../queryService/queryService.js';
import { userModel } from '../../models/users.model.js';
import { walletModel } from "../../models/wallets.model.js";
import { MESSAGES } from '../../constants/index.js';

const Op = Sequelize.Op;

export const signUpService = async (params) => {
    const existingUser = await selectOne(userModel, { [Op.or]: [{ email: params.email.toLowerCase()}, { account_number: params.account_number}] })
    if (_.isEmpty(existingUser)) {
        if (params.password) {
            params.password = await bcryptData(params.password);
            params.passcode = await bcryptData(params.passcode);
            params.email = params.email.toLowerCase();
            let newUser = await addData(userModel, params);
            let userData = newUser.get({ plain: true });
            await addData(walletModel, { user_id: userData.id, amount: 0, account_number: userData.account_number})
            delete userData.password;
            let token = await userTokenResponse(newUser);
            return { ...token, ...userData };
        }
    } else {
        throw new Error(MESSAGES.acc_already_exists);
    }
}

export const loginService = async (params) => {
    let userDetails = await selectOne(userModel, { email: params.email.toLowerCase() })
    if (userDetails) {
        let isPasswordMatch = await comparePassword(params.password, userDetails.password)
        if (isPasswordMatch) {
            let token = await userTokenResponse(userDetails);
            const response = _.pick(userDetails, ['id', 'first_name', 'last_name', 'email','passcode', 'account_number', 'createdAt', 'updatedAt'])
            return { ...token, ...response }
        } else {
            throw new Error(MESSAGES.invalid_password)
        }
    } else {
        throw new Error(MESSAGES.user_not_found)
    }
}