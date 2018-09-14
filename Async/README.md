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
### what is setTimeout
it asynchronously invokes a callback after a delay in milliseconds
```javascript
var delay = 1000;
var timerId = setTimeout(callback, dealy)
```
### what is clearTimeout
it asynchronously cancel the task scheduled for timerId.
```javascript
clearTimeout(timerId)
```

### what is setInterval/clearInterval?
it asynchronously runs a task on repeat every x seconds. 
```javascript
var num =0
var intervalId = setInterval(function(){
    num ++;
    console.log("num: ", num);
    if(num === 3){
        clearInterval(intervalId);
    }
}, 1000);
```

## Event loop and Queue
### What is the Queue?
an order list of functions waiting to be placed in the stack. first in first out (FIFO)
### What is event loop and how does the queue work with the stack
event loop is the functionality of javascript runtime that checks the queue when the stack is empty. if the stack is empty, the front of the queu is placed in the stack. 

this means in a code like following, it will print 2 first than 1 because console.log("2") is placed on stack and the  console.log("1") is on the queue and will not be run until the stack is empty.
```javascript

setTimeout(function(){
    console.log("1");
}, 0);

console.log("2")
```
### Define Javascript as a single threaded language
Code execution is linear. Code that is running cannot be interrupted by something else going on in the program

## Promise
it is an object that represent a task that will be completed in the future. the .then and .catch handles the resolve and reject action of the function in promise. 

### Cons of using nested callbacks
- really difficult to read
- code is not modular
- logic is difficult to reason
### Promise chaining  to create synchronous programing
allows multiple .then to be chained to a promise. if a a previous callback inside .then returns a promise, the next callback inside .then will wait for the previous promise to finish. we can use this to combine async tasks into a chain of promises.

## AJAX
- it is an approach to web dev. not tech, framework or technology. 
- website can send and request data from server in the background withotu distrubing the current page, which leads to single page apps

### XMLHttpRequest
- XHR has 5 state, numbering from 1 to 5. unsent, opened, header recieved, loading, done. 
- you must open the request and then send the request.
- use the following code the create client, open, send and recieve response from XMLHttpRequest
```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    console.log('Ready STATE IS: ', XHR.readyState);
    if(XHR.readyState == 4){
        if(XHR.status == 200){
        console.log(XHR.responseText);
        } else{
            console.log("Error");
        }
    }
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```
### Fetch API
``` javascript
var url = "https://api.github.com/users/jkoeh1";
    fetch(url)
    .then(handleErrors)
    .then(function(request){
        console.log("Good");
        console.log(request.json());
    })
    .catch(function(){
        console.log("bad");
    })
```
- it is an api that allows us to send request easily and handles promise
- it simplies the flow to send xhr.

### jQuery
it is a cross-platform javascript library designed to simplied client-side scripting of html. It is primarily used to manipulate DOM and makes it quicker to write JS code by supplying method that would take multiple line in JS (XHR).

Main Methods: 
- $.ajax
- $.get
- $.post
- $.getJSON

drawback of jQuery, it contains 200+ methods many of which is redundant because javascript could do it with the same line of code. what it is best for, handling XHR request

### axios 
it is a javscript library that simplify XHR request. it's ligher weight than jQuery but retains it's biggest strength in XHR request simplification 
- axios makes XMLHttpRequest from browser
- axios makes http request from node.js
- supports the promise api
- intercept request and response
- transform request and reponse data
- cancel requests
- automatic transform for JSON data

#### sending request thru axios
``` javascript
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
``` 
#### sending request thru params

``` javascript
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```


#### handling errors thru axios
``` javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
``` 

