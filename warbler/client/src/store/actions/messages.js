// 1. creat actions LOAD_MESSAGES and REMOVE_MESSAGE
// 2. create action creator for fetchMessages where we use thunk and apicall to
// retrieve all messages and return it to LOAD_MESSAGES
// 3. create reducer for message for LOAD_MESSAGE and REMOVE_MESSAGE and pass it
// (the reducer) to combined reducer

import {apiCall} from '../../services/api';
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';
import {addError} from './errors';
export const loadMessages = messages => {
    return {type: LOAD_MESSAGES, messages: messages}
}
// 1. create an action for remove
// 2. create action creator for remove message 
// 3. create reducer to handle removed messages
// 4. create a button to delete message
export const remove = id =>{
    return {type: REMOVE_MESSAGE, id: id}
}

export const removeMessage = (user_id, message_id) =>{
    return dispatch =>{
        return apiCall("Delete", `api/users/${user_id}/messages/${message_id}`)
        .then(()=> dispatch(remove(message_id)))
        .catch(err=> dispatch(addError(err.message)));
    }
}
export const fetchMessages = () => {
    return dispatch => {
        return apiCall("GET", "/api/messages")
            .then(res => dispatch(loadMessages(res)))
            .catch(err => dispatch(addError(err.messages)));
    }
}

export const postNewMessages = text => (dispatch, getState) => {
    let {currentUser} = getState();
    return apiCall("Post", `api/users/${currentUser.user.id}/messages`, {text})
        .then(() => {})
        .catch(err => dispatch(addError(err.messages)));
}