
// 1. creat actions LOAD_MESSAGES and REMOVE_MESSAGE
// 2. create action creator for fetchMessages where we use thunk and apicall to retrieve all messages and return it to LOAD_MESSAGES
// 3. create reducer for message for LOAD_MESSAGE and REMOVE_MESSAGE and pass it (the reducer) to combined reducer


import { apiCall } from '../../services/api';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';
import { addError } from './errors';
export const loadMessages = messages => {
    return {
        type: LOAD_MESSAGES,
        messages: messages
    }
}

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("GET", "/api/messages")
            .then(res => dispatch(loadMessages(res)))
            .catch(err => addError(err.message));
    }
}