var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

//middlewares

app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.cookie);
  next();
});

app.get("/about", (req, res) => {
  res.cookie("username", "Suraj");
  res.end("About");
});

app.listen(4000, () => {
  console.log("Server is listening to 4K");
});
