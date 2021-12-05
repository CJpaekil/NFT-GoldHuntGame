import * as constants from '../constants';
import isEmpty from '../../utils/is-empty';

const initialState = {
    isAuthenticated: false,
    users: [],
    user: {}
}

function userReducer (state = initialState, action) {
    switch(action.type) {
        case constants.SET_CURRENT_USER: 
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !isEmpty(action.payload),              
            }
        default:
            return state;
    }
}

export default userReducer;