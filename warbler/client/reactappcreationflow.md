1. create some simple reducers for store
2. Comine them as root reducer
3. create function configure store which return a store with root reducer, middleware redux-thunk (for handling async call), and redux store dev tool for debug
4. from the main app, use the function configureStore to create a store .
5. wrap the main component with a Provider and Browser Router. 
6. use the store just created to pass in to Provider store property