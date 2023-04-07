import { userModel } from "../../models/user.model.js";
import { walletModel } from "../../models/wallet.model.js"
import { transactionModel } from '../../models/transaction.model.js';
import { selectOne, addData, updateData, selectAll } from '../../queryService/queryService.js';
import { MESSAGES } from '../../constants/index.js';
import _ from 'lodash';
import { loggingModel } from "../../models/logging.model.js";

export const addWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   if (params?.passcode == userDetail.passcode) {
      const userWallet = await selectOne(walletModel, { userId })
      let userData = userWallet.get({ plain: true });
      const amount = userData.amount + (+params.amount);
      await updateData({ model: walletModel, amount }, { where: { userId: userId } });
      const addTransData = { sourceAccountNumber: userDetail.accountNumber, amount, destinationAccountNumber: userDetail.accountNumber, operationType: 'add' }
      await addData(transactionModel, addTransData);
      return { ...userData, amount }
   } else {
      throw new Error(MESSAGES.incorrect_passcode)
   }
}

export const sendWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   if (params?.passcode == userDetail.passcode) {
      const walletDetail = await selectOne(walletModel, { userId });
      let senderUserWalletData = walletDetail.get({ plain: true });
      if (!_.isEmpty(walletDetail)) {
         if (params.amount > senderUserWalletData.amount) {
            throw new Error(MESSAGES.insufficient_amount)
         } else {
            const { amount, destinationAccountNumber } = params;
            const receiverWalletData = await selectOne(walletModel, { accountNumber: destinationAccountNumber });
            let receiverDetails = receiverWalletData.get({ plain: true });
            if (!_.isEmpty(receiverDetails)) {
               //add credit transaction
               const addCreditData = { sourceAccountNumber: senderUserWalletData.accountNumber, amount, destinationAccountNumber, operationType: 'credit' }
               await addData(transactionModel, addCreditData);

               //add debit transaction
               const addDebitData = { sourceAccountNumber: senderUserWalletData.accountNumber, amount, destinationAccountNumber, operationType: 'debit' }
               await addData(transactionModel, addDebitData);

               if (userId !== receiverDetails.userId) {
                  await updateData({ model: walletModel, amount: receiverDetails.amount + (+params.amount) }, { where: { userId: receiverDetails.userId } });
                  await updateData({ model: walletModel, amount: senderUserWalletData.amount - (+params.amount) }, { where: { userId } });
               } else {
                  await updateData({ model: walletModel, amount: senderUserWalletData.amount + (+params.amount) }, { where: { userId } });
               }
            } else {
               throw new Error(MESSAGES.receiver_wallet_not_available)
            }
         }
      } else {
         throw new Error(MESSAGES.wallet_user_invalid)
      }
   } else {
      throw new Error(MESSAGES.incorrect_passcode)
   }
}

export const getPassbookService = async (query) => {
   const { sourceAccountNumber, destinationAccountNumber } = query;
   const condition = {}
   if (sourceAccountNumber) condition['sourceAccountNumber'] = sourceAccountNumber;
   if (destinationAccountNumber) condition['destinationAccountNumber'] = destinationAccountNumber;
   return await selectAll(transactionModel, condition);
}

export const getLoggingService = async () => {
   return await selectAll(loggingModel);
}