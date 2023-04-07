import { transactionModel } from "../../models/transaction.model.js";
import { userModel } from "../../models/user.model.js"
import { walletModel } from "../../models/wallet.model.js";
import {selectAll} from '../../queryService/queryService.js';
import _ from 'lodash';

export const getUsersListService = async(userId) => {
    const condition = userId ? { id : userId }: {}
    return await selectAll(userModel, condition);
}

export const getUserWalletListService = async(userId) => {
    const condition = userId ? { userId }: {}
    return await selectAll(walletModel, condition);
}

export const getUserTransactionListService = async(query) => {
    const { sourceAccountNumber, destinationAccountNumber} = query;
    const condition = {}
     if(sourceAccountNumber) condition['sourceAccountNumber'] = sourceAccountNumber;
     if(destinationAccountNumber) condition['destinationAccountNumber'] = destinationAccountNumber;
    return await selectAll(transactionModel, condition);
}