# Closure
## What is Closure?
It is a function that make use of variable defined in outer functions that have previously returned
```javascript
function outer(a){
    return function inner(b){
        return a + b;
    }
}
//inner function is makeing use of the variable "a" which was defined in an outer function called "outer" and by the time inner function is called the outer function has already returned. this inner function is called closure.
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