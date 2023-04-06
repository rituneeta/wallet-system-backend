import Joi from "joi";

export const walletSchema = Joi.object({
    passcode: Joi.number().min(6),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    amount: Joi.number().positive().min(10).max(50000).required()
})