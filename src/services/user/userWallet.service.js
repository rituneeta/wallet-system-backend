import { userModel } from "../../models/user.model.js";
import { walletModel } from "../../models/wallet.model.js"
import { selectOne, addData, updateData } from '../../queryService/queryService.js';
import { MESSAGES } from '../../constants/index.js';
import _ from 'lodash';

export const addWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   if (params?.passcode == userDetail.passcode) {
      const existingUser = await selectOne(walletModel, { userId: userId })
      if (_.isEmpty(existingUser)) {
         let newUser = await addData(walletModel, { ...params, userId });
         let userData = newUser.get({ plain: true });
         return { ...userData }
      } else {
         let userData = existingUser.get({ plain: true });
         const amount = userData.amount + (+params.amount);
         await updateData({ model: walletModel, amount }, { where: { userId: userId } });
         return { ...userData, amount }
      }
   } else {
      throw new Error(MESSAGES.incorrect_passcode)
   }
}