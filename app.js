const express = require('express');
const helmet = require('helmet');
const settings = require('./settings');
const googleAnalytics = require('connect-ganalytics');
const mongo = require('./src/db/Mongo.js');

const app = express();

// routes
const indexRouter = require('./src/routes/IndexRouter');
const aboutRouter = require('./src/routes/AboutRouter');
const postRouter = require('./src/routes/PostRouter');

// app sets
app.set("view engine", "jade");
app.set('views', __dirname + '/src/view');

// app use
app.use(express.static(__dirname + '/src/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(googleAnalytics('YOUR_ANALYTICS_CODE'));
app.use(helmet());

// app use routes
app.use('/post/', postRouter);
app.use('/about/', aboutRouter);
app.use('/', indexRouter);

//start
app.listen(5000, () => console.log('Server started on port 5000.'));

module.exports = app;
