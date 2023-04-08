import _ from 'lodash';
import Sequelize from "sequelize";
import { userModel } from "../../models/users.model.js";
import { walletModel } from "../../models/wallets.model.js"
import { transactionModel } from '../../models/transactions.model.js';
import { selectOne, addData, updateData, selectAll } from '../../queryService/queryService.js';
import { MESSAGES } from '../../constants/index.js';
import { sequelize } from '../../database.js';
import { compareData } from '../../utils/appUtils.js';

const Op = Sequelize.Op;

export const addWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   const isPasscodeMatch = await compareData(params?.passcode, userDetail.passcode);
   if (isPasscodeMatch) {
      const userWallet = await selectOne(walletModel, { user_id: userId })
      let userData = userWallet.get({ plain: true });
      let amount = userData.amount + (+params.amount);

      const t = await sequelize.transaction();
      try {
         await updateData({ model: walletModel, amount }, { where: { user_id: userId }, transaction: t });
         const addTransData = { account_number: userDetail.account_number, transaction_amount: params.amount, source: userDetail.account_number, transaction_type: 'add', transaction_status: 'Success' }
         await addData(transactionModel, addTransData, { transaction: t });
         await t.commit();
      } catch (error) {
         await t.rollback();
         const addTransData = { account_number: userDetail.account_number, transaction_amount: params.amount, source: userDetail.account_number, transaction_type: 'add', transaction_status: 'Failed' }
         await addData(transactionModel, addTransData);
         throw new Error(MESSAGES.something_went_wrong)
      }
      return { ...userData, amount }
   } else {
      throw new Error(MESSAGES.incorrect_passcode)
   }
}

export const sendWalletService = async (userId, params) => {
   const userDetail = await selectOne(userModel, { id: userId });
   const isPasscodeMatch = await compareData(params?.passcode, userDetail.passcode);
   if (isPasscodeMatch) {
      const senderWalletDetail = await selectOne(walletModel, { user_id: userId });
      let senderUserWalletData = senderWalletDetail.get({ plain: true });
      if (!_.isEmpty(senderWalletDetail)) {
         if (params.amount > senderUserWalletData.amount) {
            throw new Error(MESSAGES.insufficient_amount)
         } else {
            const { amount, receiver_account_number } = params;
            const receiverWalletData = await selectOne(walletModel, { account_number: receiver_account_number });
            let receiverDetails = receiverWalletData.get({ plain: true });

            if (!_.isEmpty(receiverDetails)) {
               const t = await sequelize.transaction();

               try {
                  if (userId !== receiverDetails.userId) {
                     await updateData({ model: walletModel, amount: receiverDetails.amount + (+amount) }, { where: { user_id: receiverDetails.user_id }, transaction: t });
                     await updateData({ model: walletModel, amount: senderUserWalletData.amount - (+amount) }, { where: { user_id: userId }, transaction: t });
                  } else {
                     throw new Error(MESSAGES.incorrect_receiver)
                  }

                  //add success debit transaction 
                  const addDebitData = { account_number: userDetail.account_number, transaction_amount: amount, source: receiver_account_number, transaction_type: 'debit', transaction_status: 'Success' }
                  await addData(transactionModel, addDebitData, { transaction: t });

                  //add success credit transaction
                  const addCreditData = { account_number: receiver_account_number, transaction_amount: amount, source: userDetail.account_number, transaction_type: 'credit', transaction_status: 'Success' }
                  await addData(transactionModel, addCreditData, { transaction: t });

                  await t.commit();
               } catch (error) {
                  await t.rollback();

                  //add failed debit transaction
                  const addDebitData = { account_number: userDetail.account_number, transaction_amount: amount, source: receiver_account_number, transaction_type: 'debit', transaction_status: 'Failed' }
                  await addData(transactionModel, addDebitData);

                  //add failed credit transaction
                  const addCreditData = { account_number: receiver_account_number, transaction_amount: amount, source: userDetail.account_number, transaction_type: 'credit', transaction_status: 'Failed' }
                  await addData(transactionModel, addCreditData);

                  throw new Error(MESSAGES.something_went_wrong);
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

export const getPassbookService = async (userId) => {
   const walletDetail = await selectOne(walletModel, { user_id: userId });
   if (!_.isEmpty(walletDetail)) {
      let userWalletData = walletDetail.get({ plain: true });
      const { account_number } = userWalletData;
      return await selectAll(transactionModel, { [Op.or]: [{ account_number }, { source: account_number }] });
   } else {
      throw new Error(MESSAGES.passbook_not_found)
   }
}