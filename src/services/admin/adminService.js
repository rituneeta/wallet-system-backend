import { transactionModel } from "../../models/transaction.model.js";
import { userModel } from "../../models/user.model.js"
import { walletModel } from "../../models/wallet.model.js";
import {selectAll} from '../../queryService/queryService.js';
import _ from 'lodash';

export const getUserListsService = async(userId) => {
    const condition = userId ? { id : userId }: {}
    return await selectAll(userModel, condition);
}

export const getUserWalletListsService = async(userId) => {
    const condition = userId ? { userId }: {}
    return await selectAll(walletModel, condition);
}

export const getUserTransactionListsService = async(query) => {
    const { receiverUserId, senderUserId} = query;
    const condition = {}
     if(receiverUserId) condition['receiverUserId'] = receiverUserId;
     if(senderUserId) condition['senderUserId'] = senderUserId;
    return await selectAll(transactionModel, condition);
}