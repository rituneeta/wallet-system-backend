import jwt from 'jsonwebtoken';

export const userTokenResponse = async (obj) => {
    const token = jwt.sign({ id: obj.id }, process.env.USER_SECRET_KEY || constants.USER_SECRET_KEY);
    return { token };
}