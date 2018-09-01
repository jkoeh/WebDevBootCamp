var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    console.log('Ready STATE IS: ', XHR.readyState);
    if(XHR.readyState == 4){
        console.log(XHR.responseText);
    }else{
        console.log("Error");
    }
}
XHR.open("GET", "https://api.github.com/zessn");
XHR.send();