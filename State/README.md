# State
## What is state in react
- A state is a stateful data of the app that could be modified (although not directly)
## How to create react component with state
- we declare constructor and assign state when we create Component class
```javascript
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {favorite: 'red'}
    }
    ...
    {this.state.favorite}
    ...
}
```

## What happen when set state is called
- the state is modified
- this is the only correct way to modify state
- we could also use this to add new property.
- setState is an async operation. When it gets invoked, it will invoke render which will update the DOM and update the view
```javascript
//
var fav = {favorite: 'red'};
this.setState({fav})
```

```javascript


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: 'red' };

    setTimeout(() => {
      this.setState({favColor: 'blue'})
    }, 3000);
  }
  render() {
    return (
      <div>
        My favorite color:
        {this.state.favColor}
      </div>
    );
  }
}

```

## Pure function (important concept for react)
- a function without side effect
- does not modify its input and does not modify global state
- it's repeatable, same inputs, same outputs
- to create a pure function for adding new properties for example
```javascript
//deconstrucing person into its property
var person = {name: 'john', age: 28}
function addJob(personObj, job){
    return {...personObj, job};
}
addJob(person, "Engineer")
```
` Changes to state should be PURE`

## React Component Architecture
### Sharing state: pass state to child components as props
- State is always passed from a parent down to a child component as a prop
- State should be not be passed ot a sibling or a parent
```javascript
const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>
      Hobbies: {props.hobbies.join(", ")}
      </h4>
    </li>
  );
}
class App extends Component {
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

```
## define which component own states
- if sibling components both need some state than it needs to be push up to the parent 
- state should always be owned by 1 component
- never duplicate state, never assign prop to state
```javascript
class App extends Component{
  render(){
    return(
      //where the state should sit
      <div>
      / want state
        <Navbar />
      //own the state
        <TicTacToe />
      </div>
    )
  }
}
```
## use stateless functional components
- components implement using a function not a class
- the function implements the render method only: no constructor, no state
- try to use stateless functional for any component that doesn't have state
```javascript
import React from 'react';
const Greeting= props =>{
  <h1>Hello, {props.name}</h1>
}
//we can do proptype checking still but it needs to be outside of the function since we no longer have a class
Greeting.propTypes ={
  ...
}
export default Greeting;
```
## setState indepth
### use a function as the first parameter to setState
- when we want to update a state using the previous state, we use the prevState 
  ```javascript
    this.setState((prevState, props)=> {
      return {
        //if we use something like this.state.counter +1 , the counter will always be the same value because this.state.counter never changes
        counter: prevState.counter +1
      };
    });
  ```
### add a callback to setState to determine when the state is up to date
- setState is asynchronous. that means using the state being set right after the setState function will result in out of sync state. to solve this problem, we use a callback
```javascript
this.setState({name: "Tim"}, ()=>{
  console.log(
    "Now state is up to date", this.state.name
  )
})
```