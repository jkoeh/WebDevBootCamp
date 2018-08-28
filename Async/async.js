
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