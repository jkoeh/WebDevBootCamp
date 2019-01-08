import { apiCall, setTokenHeader } from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';
import {addError, removeError} from './errors';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}
// TODO:
// 1. create setAuthorizationToken function which basically just call setTokenHeader and pass the token parameter
// 2. add setAuthorizationToken to logOut and authUser so that user can be set/cleared
// 3. pass setAuthorizationToken to top level of the application (App.js) and check 
// if there's jwtToken in localStorage and use it (the jwtToken in localStorage) if there is. 
export function setAuthorizationToken(token){
    return setTokenHeader(token);
}
export function logout(){
    return dispatch =>{
        //clear cookie
        localStorage.clear();
        //clear current user
        setAuthorizationToken(false);

        dispatch(setCurrentUser({}));
    }
}
export function authUser(type, userData){
    return dispatch =>{
        return new Promise((resolve, reject)=>{
            return apiCall("post", `/api/auth/${type}`, userData)
            .then(({token, ...user})=>{
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject(); // indicate the API call failed
              });
        })
    }

}