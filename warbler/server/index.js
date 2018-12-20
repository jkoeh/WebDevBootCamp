require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const errorHandler = require('./handlers/error') 
const authRoutes = require('./routes/auth');
app.use(cors());
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);

app.use(function(req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(errorHandler);

app.listen(PORT, HOST, function(){
  console.log(`Running on http://${HOST}:${PORT}`);
});
