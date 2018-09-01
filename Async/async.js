
// Our Implementation of foreach
function forEach(arr, callback){
    for(var i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}


function findIndex(arr, callback){
    for(var i = 0; i<arr.length; i++){
        if (callback(arr[i], i , arr)==true){
            return i;
        }
    }
    return -1;
}

// Promise examples of how resolve and reject is handle by then and catch
var p1 = new Promise(function(resolve, reject){
    var num = Math.random();
    if(num< 0.5){
        resolve(num);
    } else{
        reject(num);
    }
});
p1.then(function(result){
    console.log("Success: "+ result);
}).catch(function(error){
    console.log("Fail: ", error);
});


// promise chaining
var counter = 0;
function incCounter(){
    counter ++;
    console.log("Counter : ", counter);
}

function runLater(callback, timeInMs){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}
runLater(incCounter, 1000).then(function(){
    return runLater(incCounter, 3000);
}).then(function(){
    return runLater(incCounter, 6000);
}).then(function(){
    console.log("Finished");
});