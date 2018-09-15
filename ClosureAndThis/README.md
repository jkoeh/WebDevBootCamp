# Closure
## What is Closure?
It is a function that make use of variable defined in outer functions that have previously returned
```javascript
function outer(a){
    return function inner(b){
        return a + b;
    }
}
//inner function is making use of the variable "a" which was defined in an outer function called "outer" and by the time inner function is called the outer function has already returned. this inner function is called closure.
```
inner function do not remember everything from the outer functions that have returned. only the variable that is needed for the inner function.

## What is the main use of closure?
- private variables: using closure can prevent specific variable from being modified externally. 
- how to prevent private variable from being modified? by returning a copy instead of the original reference.   

# This
## What is 'this'?

## four way to determine what 'this' is refering to
### Global context
- when it ('this') is not inside a declared object
- using "use strict" can avoid accidentally creating global variable inside a function. 
```javascript
"use strict"
function badIdea(){
   return this;
}
function badIdead2(){
    this.person = "abc";
}
```
### Implicit/object
- When 'this' is inside of a declared object
- it will always be the closest parent object
```javascript

var person = {
    firstName: "john";
    sayHi: function(){
        return this.firstName;
    },
    checkContext: function(){
        return this === person;
    }
}
```
- what to do when there's complex nested object such as:
```javascript

var person = {
    firstName: "john";
    sayHi: function(){
        return "hi " + this.firstName;
    },
    checkContext: function(){
        return this === person;
    }
    dog:{
        woof: function(){
            return "woof " + this.firstName;
        }
        checkContext: function(){
            return this === person;
        }
    }
}

```
in this case, the woof and checkContext in the dog property will return "woof undefined" and false because 'this' is referring to dog.
### explicit: call, apply, bind
- they are used to set context of 'this'. they take precedence over global and implicit rule, hence explicit rule
#### call
- using the example from the nested object, if we call person.dog.woof.call(person) and person.dog.checkContext.call(person) than we will now be using person for this. it will return "woof john" and true.
- it is commonly used to reduce code duplication
- another example would be utilizing slice. slice works with array but not directly with other array-like object. if we set the slice on the divs instead using call, we now apply slice to the divs (an array-like object). we can now use all array method: filter, reduce, map, etc on this converted array object.
```javascript
var divs = document.getElementsByTagName('div ');
var divArrays = [].slice.call(divs);
divsArrays.filter(function(val){
    return val.innerText === 'Hello';
})
```

#### apply
- Syntactically speaking, 'call' and 'apply' only differ in how they pass in argument. Without argument, they would look and behave identically. 

```javascript
var divs = document.getElementsByTagName('div ');
var divArrays = [].slice.call(divs);
var divArraysToo = [].slice.apply(divs);
```
- When we are using 'apply' and 'call' for a function that takes in arguments, whereas 'call' takes in infinite arguments (thisArg, a, b, c, d, ...), 'apply' takes in only two arguments (thisArg, [a,b,c,d,...]). This is useful we would like to pass array to a function that does not accept an array. 

```javascript
var nums = [0, 1, 3, 4, 6];
//this would pass back NaN because Math.max does not take in array
var maxNum = Math.max(nums); 
//this would be fine
var maxNumGood = Math.max.apply(this, nums); 

```

#### bind
- 'bind' behaves just like call but do not return immediately. Instead, 'bind' returns a new function with the keyword 'this' and the containing arguments bounded. This function could be invoke later.
- This property of 'bind' is useful when we do not know all the argument that will be passed to the function at the time of 'bind'. We just want to return a function with some of the value defined. We call this <i>partial application</i> 
```javascript
function sayHi(guestOne, guestTwo, guestThree){
    return this.hostName + " says hi to " + guestOne + " " + guestTwo + " " + guestThree;
}
var john = {
    hostName: "john"
}
sayHi.bind(john, "jason", "george")

```
- Another use case of 'bind' is to set the context of 'this' to a function. This is useful when we run the code asynchronous instead of line by line. A good example of this scenario is when we use set timeout inside a declared object.


```javascript

var john = {
    name: "john",
    sayHi: function(){
        setTimeout(function(){
            console.log("hi " + this.name);
        }, 20000);
    }
}
john.sayHi();
//return "hi ' because the setTimeout is called at a later time and the keyword 'this' does not refereed to the parent object john but rather the global object 'window'. Since name is not defined at the global context, it returns nothing.
// so instead we could do
var jordan = {
    name: "jordan",
    sayHi: function(){
        setTimeout(function(){
            console.log("hi " + this.name);
        }.bind(this), 1000);
    }
}
jordan.sayHi();
// return hi jordan. 
// The second keyword 'this' refers to jordan. This method enforced the context of 'this'. We do not use jordan during bind because the code would've been unusable for any other name/person. 
```