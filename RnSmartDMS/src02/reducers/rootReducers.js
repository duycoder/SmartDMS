import { combineReducers } from 'redux';
import userReducers from './sub/userReducers';

const rootReducer = combineReducers({
    userReducers
});

export default rootReducer;