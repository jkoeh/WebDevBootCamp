# ES2015
# Summary
- we have two new keyword, const and let. 'const' ensures we cannot redecalre a variable. let gives us block scope
- template string use ` and ${} to inject variables
- arrow function or lambda. it's easier and more consie. but remember it does not have it's own 'this'
- use rest and spread '...' to gather arguments to a function as an array spread out values in an array to another value or function
- write more concise methods and property names using shorthand notation and computed property names
- object destructuring is very useful for reducing duplication and passing in default parameters as a destructured object 
- array destructuring can also be used for swapping variables in an array without a separate swap function 
## what is ES2015?
- native javascript with important features that is used extensively by react/angular
## let and const keyword
### const
- A variable declared under const cannot be redeclare.  
- If the variable is a primitive such as string or boolean, the value cannot be changed
- if the variable is an object, it can mutate but cannot be declare again.
- this mean, const does not make the object immutable. 
- it is useful for variable that you only want to declare once
### hoisting
- a build in feature of js
- a variable declared with the keyword 'var' will have it alleviate to the top of the scope that they are at. For example:
```javascript
function someFunc(){
    return elie;
    var elie = "daduh"
}
```
will return undefined instead of ref error because with hoisting, the code actually read like the following
```javascript
function someFunc(){
    var elie;
    return elie;
    elie = "daduh"
}
```
### let
- it creates a block scope 
- when you create a variable inside a block and do not want it to be accessible outside the block
- it has hoisting but will not be initialized until their definition is evaluated. so the following func  would return Reference Errror
```javascript
function someFunc(){
    return elie;
    var elie = "daduh"
}
```
## template strings
- by using back tick `, we can substitute part of the string out with variable. 
- it also allow multi-line string easily
``` javascript
var firstName = 'john'
var lastName = 'koeh'
console.log(`Hello ${firstName} ${lastName}!`); //Hello john koeh!

console.log(`
Hello
How 
nice 
this is 
`)
//print directly in multi line with /n
```
## arrow functions 
- it provides a way to simplify writing function.

```javascript
var add = function(a,b){return a+b}
var addLambda = (a,b) => a+b;
```
- it is especially useful when we need a callback function
```javascript
[1,2,3].map(function(value){
    return value *2
});

[1,2,3].map(value=> value*x)

function doubleAndFilter(arr){
    return arr.map(function(value){
        return value*2;
    }).filter(function(value){
        return value %3 ===0;
    })
}

var doubleAndFilterLambda = arr => arr.map(x=> x*2).filter(y=> y %3 ===0);

```
- arrow function does not have its own keyword 'this'. Instead, when we use 'this' inside arrow function, the keyword refers to its enclosing context

```javascript
var a = {
    x: 'john',
    //we will need bind to bind the hi method to instance a.
    hi: function(){
        setTimeout(function(){
            console.log("Hello" + this.x)
        }.bind(this), 1000)}
}
    // we won't have to worry about it if we used arrow func since it will directly refer to the instance it belongs to
var b = {
    x: 'john',
    hi: function(){
        setTimeout(()=>
            console.log("Hello" + this.x)
        , 1000)}
    }
// we don't want to use arrow function to completely replace function in hi because it would not have a this keyword bind to instance object anymore

```
- it doesn't have 'arguments' keyword 
- however, if the arrow function is inside an outer function, it can return the arguments of the outer function (only). although that's not the best way to do it since it would be very confusing
- we do not ever want to use arrow function as methods in objects since the this keyword will always be incorrect


## object enhancements
- when key and value has the same name, we do not need to provide both
```javascript
var firstName = 'john';
var lastName = 'koeh';

var student = {
    firstName: firstName;
    lastName: lastName
}
// short hand version

var student= {
    firstName, 
    lastName
}
//we can also omit the variable that is function from needing to use function keyword

var student = {
    sayHi(){
        return "Hello!"
    }
}
```
### computed property name
- property name could be dynamic and declared directly inside object initializer
```javascript
// Computed property names (ES2015)
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config); // {size: 12, mobileSize: 4}

```
# for of loop
- for ... of loop. utilizing symbol.iterator method in, we can iterate through array and string
## default parameters
we can set default parameter for functions by passing in value at the parameter
```javascript
function add(a= 10, b=10){
    return a+b
}
add() //20
```
## rest vs spread operators
### rest operator
- it manifest as three dots in front of a param
- it allows us to represent indefinite number of arguments as an array which allows us to do array method on the arguments without the need of converting them to array with apply first
```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
```
### spread operator
- it is similar to rest operator except it's not on a function declaration but to convert an iterable (such as array) to be expanded in places where zero or more arguments (func call), or elements (for array literal) are expected. 
```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

## destructuring
- extracting value from an arrays or properties from objects into distinct variables
``` javascript
var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}
var {firstName, lastName}= instructor;
//or if you want different variable name to store the property of the obj instance
var {firstName: a, lastName: x} = instructor;
firstName;//Elie
lastName;//Schoppik

a;//Elie
x;//Schoppik
```
- we could also use destructuring to initialize complex object
    - we're passing in a destructed object as a default parameter
    - we assign as a default value an empty object so ES2015 knows we are destructuring
    - if nothing is passed in, we default to the destructured objects as the parameters

```javascript
function createInstructor({name={first:"Matt", last:"Lane"}, isFunny=false}={}){
    return[name.fist, name.last, isFunny];
}
```
- lastly we could use it to unpack objects
``` javascript
function displayInfo({name, favColor}){
    return[name, favColor];
}
var instructor={
    name: "john",
    favColor: "blue"
}
displayInfo(instructor); //["john", "blue"]
```
- array destructuring, we no longer need to assign variable one at a time
``` javascript
function returnNumbers(a,b){
    return [a,b];
}
[first, second] = returnNumbers(5, 10);
```

- swapping values, we no longer need a temp variable
``` javascript
function swap(a,b,c){
    return [a,b,c]=[c,b,a]
}

```
