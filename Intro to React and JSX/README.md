# React
## Define front-end frameworks
1. handle DOM manipulation that is predefined
2. handles navigation: changing address without refreshing the page
3. state management: provide tool to keep track of data without needing to store these data in DOM
#### how does front end framework interact with backend
1. client such as browser sends a GET/ request to the back end (node in our case)
2. the server repond with some html (i.e. index.html)
3. the client will reach the script tag and make a GET/bundles.js which includes all the javascripts that's needed for the web app client. (this is webpack and the bundle.js includes react.js)
4. servers will return the bundles.js which the browser runs.
5. Framework now in control of the DOM
## Desribe React at a high level
- released by FB
- not a front-end library by itself and more of a view library that uses composable components
 (concern with displaying stuff on the screen, every component needs to have a arender method)
- it is usually used together with react router and redux
- Composable components: many different components that composed together to build one whole application

## Babel and transpiler
- Babel is a transpiler. A transipler converts one source code version to another. With Babel we are able to convert JSX into Vanilla JS
## Use JSX in our react component
- with babel, we can now use html directly in render method
```javascript
<script type="text/babel">
    class Pet extends React.Component{
      //it's best practice to compile babel into javascript before running it on browser otherwise
      //it will be compile in real time which is very slow.
      render(){
          return (
              <div>
                <h2>Moxie</h2>
                <img src="{someimagelink}" 
                alt = "moxie my cat"/>
              </div>
          )       
      }
    }
    // we no longer need to create the element with React.createElement
    ReactDOM.render(<Pet />, document.getElementById('app'));
  </script>

```

## JS inside JSX
```javascript
  class Hobbies extends React.Component{
    render(){
      const liStyle = {fontSize: '1.5em'};
      const hobbies = ["sleep", "eat", "meow"]
      return(
        //each child in an array or iterator should have a unique "key" prop
        <ul>
          {
            hobbies.map((h, i)=> <li key={i} style={liStyle}>{h}</li>)
          }
        </ul>
      )
    }
  }
```
## style & class attribute in JSX

