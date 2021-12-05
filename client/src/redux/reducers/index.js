import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    error: errorReducer,
    auth: userReducer,
    project: projectReducer
});
