import Joi from "joi";

export const walletAddSchema = Joi.object({
    passcode: Joi.string().min(6).max(7),
    amount: Joi.number().positive().min(10).max(50000).required()
});

export const walletPaySchema = Joi.object({
    passcode: Joi.string().min(6).max(7),
    receiver_account_number: Joi.string().min(10).max(11).required(),
    amount: Joi.number().positive().min(10).max(50000).required()
});