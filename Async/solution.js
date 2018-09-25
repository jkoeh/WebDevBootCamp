function doubleValues(arr){
    var newArr =[];
    arr.forEach(function(value) {
        newArr.push(value*2);
    });   
    return newArr;   
}

function onlyEven(arr){
    var newArr =[];
    arr.forEach(function(value) {
        if(value%2===0){
        newArr.push(value);
        }
    });   
    return newArr;   
}
function addKeyValue(arr, key, value){    
    arr.forEach(function(val) {            
        val[key] = value
    });   
    return arr;   
}
function vowelCount(str){
    var splitArray = str.split("");
    var vowels = "aeiou";
    var obj = {};
    splitArray.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !==-1){
            if(letter.toLowerCase() in obj){
                obj[letter.toLowerCase()] ++;
            }
            else{
                obj[letter.toLowerCase()]=1
            }
        }
    });
    return obj;

}