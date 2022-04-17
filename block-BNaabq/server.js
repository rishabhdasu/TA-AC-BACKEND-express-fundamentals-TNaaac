var express = require("express");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");

var app = express();

//middlewares

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  res.cookie("username", "Suraj");
  next();
});

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.cookie("username", "Suraj");
});

app.listen(4000, () => {
  console.log("Server is listening to 4K");
});
