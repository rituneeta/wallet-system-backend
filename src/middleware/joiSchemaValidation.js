import { errorResponse } from "../utils/appUtils.js";
import { CODE } from "../constants/index.js"

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data);
  if (result.error) {
    const errorDetails = result.error.details.map(value => {
      return {
        message: value.message,
        path: value.path
      };
    });
    return errorDetails;
  }
  return null;
}
export const validateBody = (schema) => {
  return (req, res, next) => {
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      return errorResponse(res, error, CODE.error_code, error[0].message.split('"').join(""))
    }
    return next();
  }
}