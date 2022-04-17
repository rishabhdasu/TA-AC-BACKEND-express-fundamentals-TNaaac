var express = require("express");

var app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

app.listen(4000, (req, res) => {
  console.log("Server is listening to port 4K");
});
