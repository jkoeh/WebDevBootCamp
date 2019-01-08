import axios from 'axios';

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
            .then(res => { return resolve(res.data); })
            .catch(err => {
                return reject(err.response.data.error);
            });
    });
}

//TODO: create setTokenHeader
// 1. takes in a parameter of token
// 2. if token exists, set axios.defaults.headers.common['Authorization] = `Bearer ${token}`
// 3. else delete axios authorization
// 4. add this function to action creator for auth so that other action creator 
// such as authUser and logout can use it to remove token
export function setTokenHeader(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
}