const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const moment = require('moment');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// Import route
const route = require('./routes');

// Import db
const db = require('./config/db');

// Connect to db
db.connect();

// Body parser
app.use(express.static(path.join(__dirname, 'public')));

// Middleware: data to form submit from server
app.use(express.urlencoded({ extended: true }));

// XMLHttpRequest, fetch, axios, ajax... to javascript from server
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Method override is used to change the method of the request
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            formatDate: (date, format) => moment(date).format(format),
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

// Print log when server started successfully on port 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
