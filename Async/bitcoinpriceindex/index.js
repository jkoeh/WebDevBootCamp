var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var currencybtn = document.querySelectorAll('input[name=currency]');
var currency = document.querySelector('input[name=currency]:checked').value;


btn.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status = 200 && xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            var currentPrice = response.bpi[currency].rate;
            
            price.innerHTML = currentPrice + " " +  currency;
        }
    }
    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();
});
btn.click();
currencybtn.forEach(element => {
    element.addEventListener("click", function(){
        currency = document.querySelector('input[name=currency]:checked').value;
        btn.click();
    })
});
