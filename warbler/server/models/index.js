//pull in mongoose, set debug, set promise, connect with keep alive and useMongoClient
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect(`mongodb://${process.env.dbhost}:27017/warbler`, {
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true
})
module.exports.User = require('./user');
module.exports.Message = require('./message');