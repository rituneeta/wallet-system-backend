import Joi from "joi";

export const walletAddSchema = Joi.object({
    passcode: Joi.number().min(6),
    amount: Joi.number().positive().min(10).max(50000).required()
});

export const walletSendSchema = Joi.object({
    passcode: Joi.number().min(6),
    destinationAccountNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    amount: Joi.number().positive().min(10).max(50000).required()
});