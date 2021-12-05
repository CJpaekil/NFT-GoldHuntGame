import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS, ADD_PROJECT, UPDATE_PROJECT } from '../constants';

export const addProject = (data) => dispatch => {
    axios.post(process.env.REACT_APP_API_URL + "/projects", data)
        .then(res => {
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getProjects = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + "/projects")
        .then(res => {
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data));
}

export const uploadImages = (formData) => dispatch => {
    axios.post(process.env.REACT_APP_API_URL + "/projects/upload", formData)
        .then(res => {
            alert("Upload success")
            dispatch({
                type: UPDATE_PROJECT,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response.data);
        })
}