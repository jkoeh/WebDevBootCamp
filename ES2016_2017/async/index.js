var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    exercise = require('./exercise')
    test = require('./test');
//     bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
//setup path for static html and css. 
//__dirname allows the app to be adjustable to different directory

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});

//define prefix of routes
app.listen(port, function () {
    console.log("app is running on port " + port);
});