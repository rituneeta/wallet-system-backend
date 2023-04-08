import _ from 'lodash';
import { MESSAGES, defaultServerResponse } from '../constants/index.js';
import bcrypt from 'bcrypt';
import { addLogging } from '../queryService/queryService.js';

/* function for sending the error response */
export const errorResponse = (req,res, error, errorCode, message = MESSAGES.bad_request) => {
    let response = { ...defaultServerResponse };
    if (!_.isEmpty(error.message)) {
        response.message = error.message;
    } else {
        response.message = message;
    }
    response.success = false;
    response.status = errorCode;
    response.body = {};
    addLogging(req, response)
    return res.status(response.status).send(response);
};

/* function for sending the success response */
export const successResponse = (req,res, params, message) => {
    let response = { ...defaultServerResponse };
    response.success = true;
    if (params) {
        response.body = { data: params };
    }
    response.message = message;
    response.status = 200;
    addLogging(req, response)
    return res.status(response.status).send(response);
}

export const bcryptData = async (data) => {
    return bcrypt.hash(data, 10);
}

export const compareData = async (myPlaintext, hash) => {
    return bcrypt.compare(myPlaintext, hash);
}