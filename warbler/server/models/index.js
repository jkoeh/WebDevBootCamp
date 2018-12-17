//pull in mongoose, set debug, set promise, connect with keep alive and useMongoClient
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/warbler', {
    keepAlive: true,
    useMongoClient: true    
})