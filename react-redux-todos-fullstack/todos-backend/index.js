const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors()); //this allows localhost 3000 to make a request to localhost 3001
app.use('/api/todos', todoRoutes);

app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});
app.listen(3001, function(){
    console.log("server starting on port 3001");
})