var url = "https://dog.ceo/api/breeds/image/random";
$("#btn").click(function () {
    $.getJSON(url)
        .done(function (res) {
            $("#cat").attr("src", res.message);
        })
        .fail(function () {
            alert("request is not pawssible");
        });
});
