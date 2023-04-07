import { userModel } from "../../models/user.model.js";
import { walletModel } from "../../models/wallet.model.js"
import { transactionModel } from '../../models/transaction.model.js';
import { selectOne, addData, updateData } from '../../queryService/queryService.js';
import { MESSAGES } from '../../constants/index.js';
import _ from 'lodash';

export const addWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   if (params?.passcode == userDetail.passcode) {
      const existingUser = await selectOne(walletModel, { userId: userId })
      if (_.isEmpty(existingUser)) {
         let newUser = await addData(walletModel, { amount: params.amount, userId, phoneNumber: userDetail.phoneNumber });
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

export const sendWalletService = async (userId, params) =>{

   const userDetail = await selectOne(userModel, { id: userId });
   if (params?.passcode == userDetail.passcode) {
      const walletDetail = await selectOne(walletModel, { id: userId });
      let senderUserWalletData = walletDetail.get({ plain: true });
      console.log("Sender data", senderUserWalletData, userId)
      if(!_.isEmpty(walletDetail)){
         if(params.amount > senderUserWalletData.amount){
            throw new Error(MESSAGES.insufficient_amount)
         }else{
            const { amount, receiverPhoneNumber} = params;
   
            const receiverWalletData = await selectOne(walletModel, { phoneNumber: receiverPhoneNumber });
            let receiverDetails = receiverWalletData.get({ plain: true });
            console.log("receiver data", receiverDetails)

            if(!_.isEmpty(receiverDetails)){
               const addDataObj= {
                  senderUserId: userId,
                  amount,
                  senderPhoneNumber: senderUserWalletData.phoneNumber,
                  receiverPhoneNumber,
                  receiverUserId: receiverDetails.userId
               }

                await addData(transactionModel, addDataObj);
                if(userId !== receiverDetails.userId){
                  await updateData({ model: walletModel, amount: receiverDetails.amount + (+params.amount) }, { where: { userId: receiverDetails.userId } });
                  await updateData({ model: walletModel, amount: senderUserWalletData.amount - (+params.amount) }, { where: { userId } });
               }else{
                  console.log(senderUserWalletData.amount + (+params.amount) , "amount", senderUserWalletData.amount,params.amount )
                  await updateData({ model: walletModel, amount: senderUserWalletData.amount + (+params.amount) }, { where: { userId } });
               }
            }else{
               throw new Error(MESSAGES.receiver_wallet_not_available)
            }
         }
      }else{
         throw new Error(MESSAGES.wallet_user_invalid)
      }
   } else {
      throw new Error(MESSAGES.incorrect_passcode)
   }
}