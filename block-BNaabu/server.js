var express = require("express");
var app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use((req, res, next) => {
  if (req.url === "admin") {
    return next("Unathorized");
  }
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
  res.end();
});

app.listen(4000, () => {
  console.log("Server is listening to port 4K");
});
