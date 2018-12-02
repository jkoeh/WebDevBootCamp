# React Router
## Resource:
<a>https://reacttraining.com/react-router/web/guides/quick-start</a>
## HTML history object
- the obj allows us to navigate forward/back based on history of browser
```javascript
window.history.back();
window.history.forward();
//go back to pages
window.history.go(-1);
//go forward to pages
window.history.go(1);
```
- the obj also allows us to load a specific address. For example from the  http://mozilla.org/foo.html, executesing the following JavaScript will cause the URL bar to display http://mozilla.org/bar.html, but won't cause the browser to load bar.html or even check that bar.html exists.
```javascript 
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```
- when handling bookmark page, we rely on the server to respond with the same index.html no matter the request page and have the client side handle rendering 

## React Router!!
<b> A tool that allows us to conditionally render component based on URL and changed URL</b>
### Describe React Router v4
- it is a tool that is created to manage routing for a single page app using component
### Differentiate BrowserRouter and HashRouter
- a `BrowserRouter` uses history to render component where as `HashRouter` uses hashes on the path to render component. `BrowserRouter` needs server side support but is less confusing
### Use Link, Switch, and Route components
- a `Link` tag instruct the react app to change url based on the path impeded in the tag
when the element is clicked. It is essentially an react router's anchor tag which uses history object to change the url and thereby avoiding the need to reload the page (and the need to talk to server)
```javascript
<Link to="/">Home</Link>
<Link to="/About">About</Link>
```
- a `NavLink` tag is basically `Link` but with the ability to instruct what style to use when you currently on that specific page by utilizing the property `exact activeStyle={}`
```javascript
const a={color: 'red'}
const b={color: 'blue'}
const defaultStyle={color: 'black'}
<NavLink exact style={defaultStyle} activeStyle={a} to="/">Home</NavLink>
<NavLink exact style={defaultStyle} activeStyle={b} to="/About">About</NavLink>
```

- a `Switch` tag is basically a switch statement that determine what component is rendered based on the path requested
```javascript
<Switch>
    <Route path="/about" component={About}/>
    <Route path="/" component={Home}/>
</Switch>
```
### ULR parameter for a Route
- URL parameters are parameters whose value is set dynamically by the URL path. This allow route to render the same component while passing the component the dynamic portion of the url so it can change based of it (often something like users/:uid)
- by using the `match` Route prop, we are able to extract the url parameter: `match.params.NAME_OF_URLPARAMETER`
```javascript
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.website}</h3>
  </div>
)
class App extends React.Component {
  render() {
    return (
      <Router>
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/zillow-group">Zillow Group</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/modus-create">Modus Create</Link></li>
        </ul>
        <Route path="/:website" component={Child}/>
      </Router>
    )
  }
}
```
### Define Route props
- match: info about how the url matches the route component
- location: where you are now, similar to window location
- history: similar to html5 history object, allows explicit changes to url
### Define withRouter
- if a component is not render within `<Router>` function, you can use withRouter to get the route props. simply wrap it during export
```javascript
const SwitchDemo =({history})=>{
    render(){
        return(
            <div>
            ...
            </div>
        )
    }
}
export default withRouter(Switch Demo)

```
### Passing you own props to a component in Route(render vs component)
- when you want to pass additional props to the component created by Route Component by that's not possible through component property. we will have to use render
- you can either use component or render, never both
```javascript
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const teacher = ['a', 'b', 'c']
const Teachers = ({ teachers }) => (
  <ul>
    {teachers.map(teach, ind)=>{
        <li key ={ind}>{teach}</li>
    }}
  </ul>
)
const App =()=>{
     <Route path="/:website" render={props=>(<Teachers {...props}, teachers={teachers}/>)}/>
}
```