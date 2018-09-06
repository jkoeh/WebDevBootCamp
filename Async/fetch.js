var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    var url = "https://api.github.com/users/jkoeh1";
    fetch(url)
    .then(handleErrors)
    .then(function(request){
        console.log("Good");
        console.log(request);
    })
    .catch(function(){
        console.log("bad");
    })

})
function handleErrors (request){
    if(!request.ok) {
      throw Error(request.status);
    }
    return request;
  }