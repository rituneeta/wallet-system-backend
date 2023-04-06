import * as constants from "../constants/index.js";
import _ from "lodash";

/*
* function for add details 
* @req : token, data
*
*/
export const addData = async (model, data) => {
    if (!_.isEmpty(model)) {
        if (!_.isEmpty(data)) {
            return model.create(data);
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
            if (!_.isEmpty(condition)) {
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
            if (!_.isEmpty(condition)) {
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