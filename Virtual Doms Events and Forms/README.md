## What is Virtual DOM?
- a virtual DOM is a reconciliation mechanism in react that keep track of the state and setState action. This mean the UI representation is stored in memory and synced with the real DOM. This abstract out the attribute manipulation, event handling and manual DOM updating that you would otherwise have to use to build your app.

## What is a synthetic events?
- a synthetic events is a wrapper around different browser's native event so that each action on react will result in the same result on different browsers.
## Changes in React 16
- fiber: virtual dom implementation of react
- error boundary: it is essentially a React component that catch JS erros anywhere in their child component tree, log error and display  fall back UI. kind of like catch but for components
https://reactjs.org/docs/error-boundaries.html 
- allows return to return an array of jsx element/string
https://www.youtube.com/watch?v=ZCuYPiUIONs

## How to add Event in react
- we add it directly to the component
```javascript 
class ClickExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "tim" };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button type="button"
          onClick={() => this.setState({name: "TIM"})}>
          UPPERCASE
        </button>
      </div>
    );
  }
}
```
we can further refactor this to this common pattern
```javascript
class ClickExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "tim" };
    //this step enforece handleClick to be bind to the correct this. this is a common pattern in react.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
      this.setState((prevState, props)=>({
          name: prevState.name.toUpperCase();
      }));
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button type="button"
        //don't accidentally invoke the function by including ()
          onClick={this.handleClick}>
          UPPERCASE
        </button>
      </div>
    );
  }
}
```

## What role does `Form` play in react
### how are controlled component and uncontrolled componenet differ?
- an uncontrolled component is one where the state is controlled by the browser and react does not know what the current state is. text inside the following input, for example, would not be controlled by react
```javascript
<input type="text" />
```
to change this to a controlled component will react is in control of the state, we add this.state.inputText and assign it to input's value. we also use `onChange` event to control the update
```javascript
<input
   type="text"
   name="inputText"
   value={this.state.inputText}
   onChange={(e) => {
     this.setState({inputText: e.target.value})
   }}
/>
```
### how to handle submit in React?
```javascript
//use onSubmit not button click. onClick doesn't handle all situation
<form onSubmit={(e) => {
    //prevent browser reload
  e.preventDefault();
  const data = [...this.state.data,
                this.state.inputText];
  this.setState({data, inputText: ''});
}}>
  <input
     type="text"
     name="inputText"
     value={this.state.inputText}
     onChange={(e) => {
       this.setState({[e.target.name]: e.target.value})
     }}
  />
</form>

```
## refs
### what is refs use for
- focus, text selection media playback
- triggering imperative animation
- 3rd party dom library
### when to use refs?
- when you can do the task regulary with react. for example if you want to do some d3

### how to use refs on uncontrolled input component
```javascript
<form onSubmit={(e) => {
  e.preventDefault();
  // access to the form value:
  console.log(this.inputText.value);
}}>
  <input
     type="text"
     ref={(input) => this.inputText = input}
  />
</form>
```