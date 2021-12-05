import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from '../constants';
import setAuthToken from '../../utils/setAuthToken'

export const registerUser = (data, history) => dispatch => {
    axios.post(process.env.REACT_APP_API_URL + "/users", data)
        .then(res => {
            history.push("/login");
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}
export const StartTest = (Name, Currency) => dispatch => {
    alert(Name);
    alert("kokokoko");
    // axios.post(process.env.REACT_APP_API_URL + "/users", data)
    //     .then(res => {
    //         history.push("/login");
    //     })
    //     .catch(err => {
    //         dispatch({
    //             type: GET_ERRORS,
    //             payload: err.response.data
    //         })
    //     })
}
export const loginUser = (data) => dispatch => {
    axios.post(process.env.REACT_APP_API_URL + "/users/login", data)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const checkAuthenticate = (history) => dispatch => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        setAuthToken(token);
        const decoded = jwt_decode(token);
        axios.get('/api/users/current', decoded)
            .then(res => {
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch(logoutUser());
                this.$router.history.push("/login");
                // history.push("/login");
            })
    }
}
