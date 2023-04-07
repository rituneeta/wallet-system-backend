import Joi from "joi";

export const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  accountNumber: Joi.number().min(10).required(),
  password: Joi.string().min(8).max(15).required(),
  passcode: Joi.number().min(6).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const userProfileUpdateSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
 passcode: Joi.number().min(6)
})