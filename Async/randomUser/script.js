var btn=document.querySelector("#btn");
var fullnameDis = document.querySelector("#fullname");
var usernameDis = document.querySelector("#username");
var emailDis = document.querySelector("#email");
var cityDis = document.querySelector("#city");
var imgDis = document.querySelector("#avatar");
var url = "https://randomuser.me/api/";

btn.addEventListener("click", function(){    
    updateflow(url);
});
function updateflow(url){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
}
function printError(err){
    console.log(err);
}
function updateProfile(parsedData){
    imgDis.src = parsedData.picture.medium;
    var fullname = parsedData.name.first + " " + parsedData.name.last;
    fullnameDis.innerHTML = fullname;
    usernameDis.innerHTML = parsedData.id.name;
    emailDis.innerHTML = parsedData.email;
    cityDis.innerHTML = parsedData.location.city;
    
    
}
function parseJSON(request){
    return request.json().then(function(parsedData){
        return parsedData.results[0];
    });
}

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}
updateflow(url)