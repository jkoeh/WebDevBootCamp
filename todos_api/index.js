var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//setup path for static html and css. 
//__dirname allows the app to be adjustable to different directory
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) {
    res.sendFile("index.html")
});

//define prefix of routes

app.use('/api/todos', todoRoutes);
app.listen(port, function () {
    console.log("app is running on port " + port);
});