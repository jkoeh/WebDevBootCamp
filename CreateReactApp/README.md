# Create React App
## Webpack
- a modular bundler for modern javascript applications. 
- a build tool. 
- combine different JS files into a bundle.js
- has a plugin system to run tools like babel so they don't have to be compile/run on client
- bundles other assets like css, images, etc


## Make an app with Create React App
- this tool comes with pre-configure webpack so we abstract out this part and focus on learning react
- the command is simple just `create-react-app {name}` 

## Import a component from another file
- to import a component form another file, we do import {componentName} from '{filePath}'
- if the component is exported using default then we can name the component name to whatever we want. Otherwise, we must import the component with it's class name
```javascript
export default App;
```

## Props
- props is a immutable data that is passed to react components. 
- we can access the information using `this.props` inside the jsx
- do not change value or create new props property using this.props
- always use attr on html to assign.
### Default Props
- Default props is a giving a property inside `this.props` a default value. 
- this is useful when we would like to return a value for a prop in `this.props` if nothing is provided
```javascript
class Pet extends Component{
    static defaultProps={
        colorPatterns: []
    }
    render(){
        return(
            <ul>
            {
                this.props.colorPatterns.map((colorPattern, index)=> (<li key={index}>{colorPattern}</li>))
            }
            </ul>
        )
    }
}
//we could also assign the defaultProps outside of the class
// Pet.defaultProps ={colorPatterns:[]};
```
### using rest operator to pass prop into render
- a convenient way to pass in properties of an instance into props would be using the `...` operator.
- you must be careful with this syntax however as unintended data might slip into the components
```javascript
class App extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "pasta",
                ingredients: ["flour, sugar, tomato"],
                instruction: "mix well",
                img: "spaghetti.jpg"
            }
        ]
    }
    render() {
        return (
            <div>
                {
                    this.props.recipes.map((recipe, index) => (<Recipe
                        key={index}
                        title={recipe.title} ingredients={recipe.ingredients}
                        instruction={recipe.instruction} />))
                }
            </div>
        )

    }
}

```
can be turned into 
```javascript 

class App extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "pasta",
                ingredients: ["flour, sugar, tomato"],
                instruction: "mix well",
                img: "spaghetti.jpg"
            }
        ]
    }
    render() {
        return (
            <div>
                {
                    this.props.recipes.map((recipe, index) => (<Recipe
                        key={index}
                        {...recipe} />))
                }
            </div>
        )

    }
}
```

### PropTypes
- a library for checking props type during development time. it will NOT run in production.
- this makes checking mistake easy during development because they specify the requirements of the prop for the user of that component.
- this needs to installed separately: prop-types
- check out https://reactjs.org/docs/typechecking-with-proptypes.html

```javascript
//Here we enforce that IngredientList must be a non-null list of string
class Ingredient extends Component{
    static propTypes={
        IngredientList = PropType.arrayOf(PropType.string).isRequired
    }


}

```

### Props.Children
- we can use props.chldren to set style and do manipulation on all components or tags inside a parent component 

```javascript
class Grid extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
class App extends React.Component {
    render(){
        <Grid>
            <h1>something</h1>
            <div>somethingElse</div>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </Grid>
    }
}

```