# AdvanceArray
## map
What goes through map.
- creates a new array
- iterate through an array
- runs callback function for each value in the array
- adds the results of that callback function to the new array
- returns the new array

Map always creates a new array 

``` javascript
var arr = [1,2,3];
return arr.map(function(val, index, array){
    return val*2;
});

//[2,4,6]
```

## filter
What happens in filter
- creates a new array
- iterate through an array
- runs callback function on each value in the array
- if the callback function returns true than than the value is added to the new array, otherwise it is ignored. 

``` javascript
var arr = [1,2,3];
return arr.filter(function(val, index, array){
    return val>1;
});

//[2,3]
```
this is very useful when you need to filter a list of objects based on certain condition just like linq


## some
- iterate through an array
- runs callback function on each value in the array
- if the callback returns true for at least one single value, return true
- otherwise return false

## every
- iterate through an array
- runs callback function on each value in the array
- if the callback returns false for at least one single value, return false
- otherwise return true

## reduce
``` javascript
var arr = [1,2,3];
return arr.reduce(function(accumulater, nextValue){
    return accumulater + nextValue;
});
//first accumulater is 1
//return 6

//with second optional parameter
var arr = [1,2,3];
return arr.reduce(function(accumulater, nextValue){
    return accumulater + nextValue;
}, 10);
//first accumulater is 10
//return 16
```
- accepts a callback and an optional second parameter
- iterate through an array
- runs callback on each value in the array
- the first parameter of the callback is either the first value in the array or the optional second parameter
- the first parameter to the callback is usually called "accumulator" 
- the returned value from the callback become the new value of accumulator