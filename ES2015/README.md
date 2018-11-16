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
-------------------------------
# ES2015 part II
## class
- we now use `class` function to reduce the need of using constructor functions and `new` key word to declare a class
``` javascript
//ES5
function Student(name, id){
    this.name = name;
    this.id = id;
}
var john = new Student('john', '18');

//instance method
Student.prototype.sayHello = function(){
    return `hello ${this.name} my old friend!`
}
//class method (like a static method)
Student.isStudent = function(obj){
    obj.constructor === Student
}
//ES2015
class Student{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    //instance method
    sayHello(){
        return `hello ${this.name} my old friend!`
    }
    static isStudnet(obj){
        return obj.constructor === Student;
    }
}
var john = new Student('john', '18');
```
- although the syntax looks different, `class` keyword is just an abstraction. underneath it's still doing what ES5 has been doing. 
## inheritance, extends
- inheritance : passing properties and methods from one class to the other. Below we see how inheritance is achieved in ES5 and ES2015
```javascript
//ES5
function Person(name, id){
    this.name = name;
    this.id = id;
}
Person.prototype.sayHello(){
    return `Hello ${this.name}`;
}
function Student(name, id){
    this.name = name;
    this.id = id;
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;

//ES2015
class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    //instance method
    sayHello(){
        return `hello ${this.name} my old friend!`
    }
    static isStudnet(obj){
        return obj.constructor === Student;
    }
}
class Student extends Person{
    
}

```
- in essence, we can now use `extends` to achieve inheritance directly on the child class

## super
- super allows a class to call the constructor of another class without needing to use apply
```javascript
//ES5
function Person(name, id){
    this.name = name;
    this.id = id;
}
function Student(){
    Person.apply(this, arguments)
}

//ES2015
class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    //instance method
    sayHello(){
        return `hello ${this.name} my old friend!`
    }
    static isStudnet(obj){
        return obj.constructor === Student;
    }
}
class Student extends Person{
    constructor(name, id){
        super(name, id)
    }
}
```

## Map
#### what is it?
- `map` is a key-value pair. Any value(object or primitive) could be used as either key or value
```javascript
var firstMap = new Map;

firstMap.set(1, "john");
firstMap.set(false, "boolean")
firstMap.set('abc', 'dfg');
firstMap.delete('abc')
firstMap.Size; //2

firstMap.get(1)//"john"
firstMap.forEach(v=> console.log(v))

//john
//boolean
for(let kvp of firstMap){
    console.log(kvp[0]);//key
    console.log(kvp[1]);//value
}    
firstMap.values() //map iterator of values
firstMap.keys() //map iterator of keys
```
#### why use map instead of Object
- easier to find size
- element order is preserved in map not Object
- won't overwrite keys on Object.prototype
- easier to iterate

#### when to use map
- if the key is dynamic
- if the keys are not strings
- frequent adding and removing kvp
- operating with multiple keys

### WeakMap
- all keys must be object not primitive
- more performant than map but can't be iterate over
## Set
- basically a hashset.
- it can contain any datatype. 
- all values must be unique 
- created by `new`

```javascript
var newSet = new Set; 
//or created from array
var s2 = new Set([1,2,34])

newSet.add(10);
newSet.add(29);
//this is ignore b/c 10 is already in there
newSet.add(10);
newSet.size;//2 

newSet.has(10); //true
newSet.delete(10);//true

newSet.size//1;
```
- there exists a WeakSet data structure where all val is object


## using native Promise constructor 
### what is promise?
- a one-time guaranteed return of some future value
- when the value is returned, the promise is either resolved/full-filled or rejected
- refactor called back hell
### how to new it up and what is its parameter
```javascript
function displayAtRnd(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random()> 5){
                resolve('Yes!');
            }
            else{
                reject('No!');
            }
        }, 2000);
    })
}
```
- since promise always return something that has .then(thenable), we can chain promise together and return values from one promise to another

### Promise.all
- Promise.all accepts an array of promise and resolve all of them or reject as soon as one of promises has been reject (fail fast)
- If all of the promise passed in fulfill, Promies.all resolve is fulfilled with an array of values bases on the orders of the promises passed in even though the promises do not resolve in the same sequence.
```javascript
function getMovie(title){
    return fetch(`https://www.omdbapi.com/?t=${title}&apikey=thewdb`).then(response => response.json());
}
// a b c are promises in pending. they have not been resolved or rejected yet. we could now use Promise.all to resolve all of them instead of using a series of .then
var a = getMovie("Titanic");
var b = getMovie("shrek");
var c = getMovie("braveheart");

Promise.all([a,b,c]).then(movies => movies.forEach(value=> console.log(value.Year)));

```
## pausing and resuming generator
- generator is a special kind of function that can pause and resume execution at any time
- created using `*`
- when invoked a generator object is returned with a key of values and done
- value is returned from the paused function using keyword `yield`
- done is a boolean which returns true when the function has completed

```javascript
function* pauseAndResumeLater(num){
    for(let i=0; i<num; i++){
        yield i;
    }
var gen = pauseAndResumeLater(5);

gen.next(); //{value: 0, done: false}
gen.next(); //{value: 1, done: false}
gen.next(); //{value: 2, done: false}
gen.next(); //{value: 3, done: false}
gen.next(); //{value: 4, done: false}
gen.next(); //{value: undefined, done: true}
}

```
- we could also use it to yield multiple values, iterate over a generator, or use it to pause async code

## copying object, array-like object conversion 
- `Object.assign` is a convenient way of assigning a object key-value pair to another object without referencing directly. 
- it is however not a deep clone. Meaning if we have objects inside the object we are copying - those still have a reference! 
```javascript
var o = {class: 'javascript', instructor: ['a', 'b', 'c']}
var o2 = Object.assign({}, o);
o2.class = 'csharp';
o2.instructor.push('d');
o.class //javascript
o.instructor//['a', 'b', 'c', 'd']

```

## other helpful functions
### Array.from
- convert array-like object into array. such as a set to array or a html elements into array of element
```javascript
var set = new Set([1,2,3,4,5,5,5,5])//[1,2,3,4,5]
Array.from(set); //[1,2,3,4,5]
```

### find
- invoked on an array
- accepts a callback with value, index and array just like map, filter, etc. 
- return first value found or return undefined

```javascript 
var student = [{name: "john"},{name: "josh"},{name: "jason"},{name: "john"}]

student.find(function(val){
    return val.name === 'john';
}); //{name: 'john'}
student.find(function(val){
    return val.name === 'hi';
});//undefined
```

### findIndex 
- exactly the same as find except it returns the index of the first found element. if nothing is found, it returns -1

### includes
- returns a boolean on whether a value is in a string

```javascript
"awsome".includes("some"); //true
```

### Number.isFinite & Number.isInteger
- this method seeks to take away the complication of checking whether a variable is a number by taking into account of NaN
- without it, we have to check that the type of the variable is a number and is not a NaN (which IS a number)
```javascript
function seeIfNum(val){
    if(Number.isFinite(val)){
        return "is a num";
    };
}
```
