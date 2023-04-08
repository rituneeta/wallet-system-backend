import _ from 'lodash';
import { transactionModel } from "../../models/transactions.model.js";
import { userModel } from "../../models/users.model.js"
import { walletModel } from "../../models/wallets.model.js";
import { selectAll } from '../../queryService/queryService.js';

export const getUsersListService = async (userId) => {
    const condition = userId ? { id: userId } : {}
    return await selectAll(userModel, condition);
}

export const getUserWalletListService = async (userId) => {
    const condition = userId ? { userId } : {}
    return await selectAll(walletModel, condition);
}

export const getUserTransactionListService = async () => {
    return await selectAll(transactionModel);

}