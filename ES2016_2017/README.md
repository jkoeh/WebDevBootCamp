# ES2016
- exponentiation operator is added `**`
- `[].includes` just like string.includes. check for element inside an array

# ES2017
- `padStart` pad a string with certain characters until it meet the total length requirement
```javascript
"awesome".padStart(10); //"   awesome"
"awesome".padStart(10, !); //!!!awesome"

```
- `padEnd` like padStart, but pad from the end
- these are used to ensure string are always a certain length 

## async await 
- when we use `async` to decorate a function, the function will returned a promise when invoke, which we could resolve
```javascript 
async function first(){
    return 'hi';
}
first();//returns a promise
first().then(val=> console.log(val)); // 'hi'
```
- `await` is a reserved keyword that can only be used inside async functions 
- await pauses the execution of the async function and is followed by a promise. `await` waits for the promise to resolve and then resume the async function's execution and returns the resolved value. if the promise is rejected, javascript will throw and error (so we don't wait indefinitely for the val to come back)
```javascript
async function callAPI(){
    console.log('1');
    var apiResult = await fetch('https://omdbapi.com?t=titanic&apikey=thewdb')
        .then(resp=> resp.json());
    console.log('2')
    console.log(apiResult);
    //1, 2, movie data.
}
```
- we could use await without function keyword inside object declaration and class declaration 
```javascript 
var data = {
    title: 'titanic',
    async callAPI(){
    var apiResult = await fetch(`https://omdbapi.com?t=${this.title}&apikey=thewdb`)
        .then(resp=> resp.json());
    console.log(apiResult);
    }
}
class movie = {
    constructor(title)
    { 
        this.title = title;
    }
    async callAPI(){
    console.log('1');
    var apiResult = await fetch(`https://omdbapi.com?t=${this.title}&apikey=thewdb`)
        .then(resp=> resp.json());  
    console.log(apiResult);
    
    }
}

```
- using async await could be problematic when calling multiple http request and waiting for each request to resolve sequentially. to avoid this problem, we could assign the request as a promise and resolve them in parallel. this is much faster as the request is send out in parallel. 
```javascript
async function callAPI(){
    var apicall = fetch('https://omdbapi.com?t=titanic&apikey=thewdb')
        .then(resp=> resp.json());
    var apicall2 = fetch('https://omdbapi.com?t=titanic&apikey=thewdb')
        .then(resp=> resp.json());
    console.log(1);
    var apiResult = await apicall;
    console.log(apiResult);
    var result2 = await apicall2;
    console.log(result2);
    console.log(2);
}
    /*
        1
        Promise {<pending>}
        VM178:8 {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}
        VM178:10 {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}
        VM178:11 2
    */
    //or we could utilize Promise.all to resolve all the promise in one go
async function getMovieData(){
    var movieList = await Promise.all([
        fetch('https://omdbapi.com?t=titanic&apikey=thewdb').then(x=>x.json()), 
        fetch('https://omdbapi.com?t=balde&apikey=thewdb').then(x=>x.json())
       ]);
    movieList.forEach(x=> console.log(x));
    }

```
## Object Rest and Spread
- gather remaining of keys and values in an object and create a new one out of them
```javascript
var instructor = {first: "Elie", last: "Schoppik", job:"instructor", numSibiling: 3}
var {first, second, ...data}= instructor;
first;//elie
second;//schoppik
data; //{job: 'instructor', numSibiling: 3}

//we can also use it to do something like object.assign()
var instructor = {first: "Elie", last: "Schoppik", job:"instructor", numSibiling: 3}
var instructor = {...instructor, first: 'john', last: 'koeh', fly: true}//{first: "john", last: "koeh", job: "instructor", numSibiling: 3, fly: true}
```