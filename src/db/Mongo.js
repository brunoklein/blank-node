const mongoose = require('mongoose');
const mongoUrl = 'mongodb://user:pass@ds1010.mlab.com:1010/blank-node';

mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
