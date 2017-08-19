import * as types from '../contants/actionTypes';

export function userLogin(userName, password) {
    return {
        type: types.USER_LOGIN,
        userName,
        password
    }
}