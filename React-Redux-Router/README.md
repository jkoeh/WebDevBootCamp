# ReactRedux
## What are react and redux responsible for?
- React concerns itself with UI component while Redux concerns itself with App state
## Guideline for creating a react app and linking it to redux
1. create a redux store using `createStore()` from redux
2. connect the react app to redux store using `<Provider store={store}>` and pass in the store to the Provider attribute store
3. In the redux store, pass in a reducer. 
4. Create the reducer, which define how the app state would change when different actions are dispatched from the react app
5. Connect the components to the redux reducer using `connect(mapStateToProps)(TodoList)`, where mapStateToProps takes in redux state and map it to props. the second parameter of connect is the component that we would like to map the state to props.
6. We can now access the redux state using `this.props.xxx` in render to render the component. 
7. We can also now send out `this.props.dispatch(xxx)` to change the redux state
8. Every time a dispatch is send, it will hit first the reducer, then mapStateToProps, and finally render

## how to use react and redux together properly
1. some react component are pure function, you don't need to pass these type of component to access redux state
2. there exist react and redux state now. use react state primarily when the state does not need to be access by other components. otherwise use redux state

# ReactRouterWithRedux
## What are Router responsible for?
- what kind of component should be generated for each url path
## Guideline for creating a react app router with redux store
1. `BrowserRouter` sits inside the provider tag
2. use `<Route path="/todos/" component={COMPONENT}>` tag to match a route to render component 
3. use `<Route path="/todos/" component={props=> <SomeComponent {...props}/>}>` to pass in the props to the component so that the component may use method such as history

# Redux and async
- we need ajax call to access backend.
- we can't write action creater that are not synchronous.
- we need a middleware to handle tese async call, hence `redux-thunk`
- we must pass in the middleware in redux store when we create the store 

```javascript
const store = createStore(rootReducer, compose                  (applyMiddleware(thunk),
    // reduxdevtool
))
```
- the thunk returns a function rather than an object and allows delay of the dispatch. We wait until a function finishes before we dispatch. 

