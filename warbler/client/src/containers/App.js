import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/index'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import {setAuthorizationToken, setCurrentUser} from '../store/actions/auth';
import jwtDecode from 'jwt-decode';
const store = configureStore();

// TODO:
// 1. check localStorage for jwtToken
// 2. set Authorization if token is found
// 3. try to set currentUser with the jwtDecode
// 4. catch if dispatch failed and force set current user to null
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }
catch(e){
  store.dispatch(setCurrentUser({}))
}
}
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
