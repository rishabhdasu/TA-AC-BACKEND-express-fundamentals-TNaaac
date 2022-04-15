var express = require("express");

var app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/json", (req, res) => {
  console.log(req.body);
});

app.get("/contact", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("Server is listening to 4K");
});
