import Joi from "joi";

export const signupSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  account_number: Joi.string().min(10).max(11).required(),
  password: Joi.string().min(8).max(15).required(),
  passcode: Joi.string().min(6).max(7).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const userProfileUpdateSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string().email(),
  passcode: Joi.string().min(6).max(7)
})