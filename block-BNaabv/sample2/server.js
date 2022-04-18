var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.cookie("cookie", 1);
  next();
});

app.get("/", (req, res) => {
  res.type("html").send("<h2>Welcome to Express</h2>");
});

app.get("/about", (req, res) => {
  res.type("text/plain").send("My name is qwerty");
});

app.post("/form", (req, res) => {
  res.json(req.body);
});

app.post("/json", (req, res) => {
  res.type("plain/text").send(req.body);
});

app.get("/users/username", (req, res) => {
  res.type("html").send(`<h2>${req.params.username}</h2>`);
});

app.use((req, res, next) => {
  next("Page Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log("server is listening to port 3K");
});
