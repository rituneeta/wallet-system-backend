import _ from 'lodash';
import { MESSAGES, defaultServerResponse } from '../constants/index.js';
import bcrypt from 'bcrypt';

/* function for sending the error response */
export const errorResponse = (res, error, errorCode, message = MESSAGES.bad_request) => {
    let response = { ...defaultServerResponse };
    if (!_.isEmpty(error.message)) {
        response.message = error.message;
    } else {
        response.message = message;
    }
    response.success = false;
    response.status = errorCode;
    response.body = {};
    return res.status(response.status).send(response);
};

/* function for sending the success response */
export const successResponse = (res, params, message) => {
    let response = { ...defaultServerResponse };
    response.success = true;
    if (params) {
        response.body = { data: params };
    }
    response.message = message;
    response.status = 200;
    return res.status(response.status).send(response);
}

export const bcryptPassword = async (myPlaintextPassword) => {
    return bcrypt.hash(myPlaintextPassword, 10);
}

export const comparePassword = async (myPlaintextPassword, hash) => {
    return bcrypt.compare(myPlaintextPassword, hash);
}