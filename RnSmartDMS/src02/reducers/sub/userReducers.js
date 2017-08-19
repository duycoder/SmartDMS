import * as types from '../../constants/actionTypes.js';

const initialState = {
    userName: '',
    password: '',
    isUserExisted: false
};

reducer = (state = initialState, action) => {
    if (action.type === types.USER_LOGIN) {
        return {
            userName: action.userName,
            password: action.password,
            isUserExisted: action.userName === 'nxhiep' && action.password === 'vnio2017'
        }
    }
    return state;
}

export default reducer;