# What's CallBack
It's a function that is passed into another function as a parameter then invoked that other function. 

And the function that accept a callback as a parameter is  a higher order function.

```javascript
function callback(){
    console.log("Coming from callback");
}
function higherOrder(fn){
    console.log("About to call callback");
    fn();
    console.log("Callback has been invoked");
}

```
## What is the purpose of callbacks?
- reduce code duplication
- advance array method
- browser event
- Ajax request
- react development


## forEach
Iterate through a list/array and execute call back on each element.
```javascript
arr.forEach(callback){
    ...
});
//callbackSignature
callback(curElement, currentIndex, array){
    ...
}

```

## findIndex
returns the index of the first element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value. 

```javascript
function findIndex(array, callback){
    ...
}

```

## The stack and heap
### What is a stack?
- an ordered data structure
- keeps track of function invocation
- handles by javascript runtime
    #### How is stack modified?
    - whenever you invoke a function, the details of the invocation is pushed on the top of the stack
    - whenever the function returns, the information abt the invocation is pop off the top of the stack. 
- in short: it is a order set of stack frame. most recently invoke function is at the top of the stack while the first function invoked is at the last of the stack. the stack is processed from to bottom. 
### What is a stack frame?
- it contains the function that was invoked
- the parameters that were passed to the funciton
- current line number

### What is the heap?
- the area in memory where the data is stored
during 
```javascript
var obj = {x: "aesfe", y: "efaef"};
```
a object is created in the head and a reference to that object is assigned to variable obj. 
a shallow copy however does not take up memory space. 

```javascript
var referecenobject = obj;
```