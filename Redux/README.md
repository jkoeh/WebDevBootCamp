# Redux
## what is it?
- it is a state management library that's inspired by FB flux and Elm. it is often used with react by can be used with other library such as Angular. 
- it store the Application state in a single javascript object
## What is action and reducer in Redux
### `action`
- an `action` is a javascript object that describe the an action to be take
- it must have key named `type` that describe the action in `string`
- it can have other keys
```javascript
{
    type: "LOGOUT_USER"
}
```
### reducer
- a function that accepts the state of an object and an action and return a new state (entire state object)
```javascript 
function rootReducer(state={}, action){
    switch(action.type){
        case "LOGOUT_USER":
            return {...state, login: false}
         case "LOGIN_USER":
            return {...state, login: true}
        default: 
            return state;

    }
}
```
## What common methods are on  the redux store
### store
- a giant javascript object that represents the state of the react application
```javascript 
const store = Redux.createStore(rootReducer);
```
### methods
```javascript 
// to change the state, we call the dispatch method
store.dispatch({type: "LOGIN_USER"});
//get the current state
store.getState();
//to subscribe to a certain function do
//1. create a callback
const changeCallback = () =>{console.log("State has change", store.getState());}
//2. listen to the callback and assign in to a value which could be used to unsubscribed
const unsubscribe = store.listen(changeCallback)
//3. unsubscribe
unsubscribe()

```
# React with Redux
## react-redux
- a library that facilitates integration of react and redux
- expose provider component and a connect function
- Handles listeners and passing in states to component
## using provider component to share a store
- wrap the App component in the Provider component
```javascript
const store = createStore(rootReducer);
<Provider store={store}>
    <App/>
</Provider>

```
## use connect to mapStateToProps and mapDispatchToProps
### mapStateToProps/mapDispatchToProps
- a pattern to extract a particular key/action in the state to pass to the specific component
```javascript
import React from 'react';
import {connect} from 'react-redux';
const BoldName={(name)}=>(<strong>name</strong>);
const DelName = {(delName)}=>(<button type="button" onClick={delName}>DELETE</button>);
const mapStateToProps = state => ({name: state.name});
const mapDispatchToProps = (dispatch, ownProps) => ({
    delName: ()=>(dispatch({type:"DEL_NAME"}))
    }
);
export default {connect(mapStateToProps, null)(BoldName), 
    connect(null,mapDispatchToProps)(DelName)}; 

const App = ()=>(
    <div>
        <BoldName/>
        <DelName/>
    </div>
    )
```

# Organizing Redux
## presentational component vs a container component 
presentaional component is primarily a stateless UI component that is more concern with how it looks while container component is a stateful component that deals with application data (often created with higher order component such as connect and withRouter)
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
## define combine reducers
- a redux function that allows for reducer composition so that each reducer only needs to be responsible for a its own piece of the app
```javascript
const rootReducer = Redux.combineReducers({
    firstReducer, 
    secondReducer
});
export default rootReducer;

```
# define action creators
- instead of defining the action directly in the mapDispatchToProps, we could use an actions object that hold multiple possible action
```javascript
const mapDispatchToProps= dispatch =>({
    onLogOut(){
        dispatch(actions.userLogout())
    }
});
```
# describe a folder structure for redux
- src/
- src/actions
- src/components
- src/containers
- src/reducers
- index.js