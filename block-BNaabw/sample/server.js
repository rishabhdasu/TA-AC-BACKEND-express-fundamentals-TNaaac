var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
const morgan = require("morgan");

var app = express();

//middlewares

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(cookieParser());

// routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/users", (req, res) => {
  res.send("Users");
});

// errors

app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

//server port
app.listen(4000, () => {
  console.log("Server is listening to port 4K");
});
