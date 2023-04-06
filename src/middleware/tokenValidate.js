import jwt from 'jsonwebtoken';
import {USER_SECRET_KEY, MESSAGES, defaultServerResponse} from "../constants/index.js"

export const validateUserToken = async (req, res, next) => {
    let response = { ...defaultServerResponse };
    if (!req.headers.authorization) {
        throw new Error(MESSAGES.token_missing);
    }
    const token = req.headers.authorization;

    jwt.verify(token, process.env.USER_SECRET_KEY || USER_SECRET_KEY, async (err, user) => {
        if (err) {
            response.status = 401;
            response.message = err.message
            return res.status(response.status).send(response);
        }
        req.user = user;
        next();
    })

}