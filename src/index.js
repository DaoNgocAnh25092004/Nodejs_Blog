const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;

const app = express();
const port = 3000;

// Import route
const route = require("./routes");

// Body parser
app.use(express.static(path.join(__dirname, "public")));

// Middleware: data to form submit from server
app.use(express.urlencoded({ extended: true }));

// XMLHttpRequest, fetch, axios, ajax... to javascript from server
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

// Print log when server started successfully on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
