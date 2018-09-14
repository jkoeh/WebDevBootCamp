var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote")
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");

// xhr
xhrbtn.addEventListener("click", xhrReqListener);

function xhrReqListener(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4 && xhr.status ==200){
            quote.innerText = JSON.parse(xhr.responseText)[0];
        }
    }
    xhr.open("GET", url);
    xhr.send();
}
//fetch
fetchbtn.addEventListener("click", fetchReqListener);
function fetchReqListener(){
    fetch(url)
    .then(function(request){
        return request.json().then(
            function(data) {
                quote.innerText = data;
        });
        
    });
}

// jquery
$("#jquery").click(function(){
    $.getJSON(url)
    .done(function(resp){
        quote.innerText = resp;
    })
})

//axios
axiosbtn.addEventListener("click", function(){
    axios.get(url)
    .then(function(resp){
        quote.innerText = resp.data;
    });
})