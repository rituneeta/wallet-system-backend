import * as constants from "../constants/index.js";
import _ from "lodash";
import {loggingModel} from '../models/logging.model.js';

/*
* function for add details 
* @req : token, data
*
*/
export const addData = async (model, data, transactionObj={}) => {
    if (!_.isEmpty(model)) {
        if (!_.isEmpty(data)) {
            return model.create(data,transactionObj);
        } else {
            throw new Error(constants.MESSAGES.request_validation_message);
        }
    } else {
        throw new Error(constants.MESSAGES.model_name_required);
    }
}

/*
* function for update details 
* @req : token, data
*
*/
export const updateData = async (params, condition) => {
    if (!_.isEmpty(params.model)) {
        if (!_.isEmpty(params) && !_.isEmpty(condition)) {
            let model = params.model;
            model.update(params, condition);
        } else {
            throw new Error(constants.MESSAGES.request_validation_message);
        }
    } else {
        throw new Error(constants.MESSAGES.model_name_required);
    }
}

/*
* function for select details 
* @req : token, data
*
*/
export const selectOne = async (model, condition) => {
    try {
        if (!_.isEmpty(model)) {
            if (condition) {
                return model.findOne({ where: condition });
            } else {
                throw new Error(constants.MESSAGES.request_validation_message);
            }
        } else {
            throw new Error(constants.MESSAGES.model_name_required);
        }
    } catch (error) {
        throw new Error(error);
    }

}

export const selectAll = async (model, condition, attributes = {}) => {
    try {

        if (!_.isEmpty(model)) {
            if (!_.isEmpty(attributes) && !_.isEmpty(condition)) {
                return model.findAll({
                    where: condition,
                    attributes: attributes
                })
            }
            if (condition) {
                return model.findAll({ where: condition });
            } else {
                return model.findAll();
            }
        } else {
            throw new Error(constants.MESSAGES.model_name_required);
        }

    } catch (error) {
        throw new Error(error);
    }

}

export const addLogging = async (req, res) => {
    const logginData = {
        method: req.method,
        endpoint: req.originalUrl,
        request: req.body,
        response: res
    }
   await addData(loggingModel, logginData);
}