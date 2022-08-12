const express = require("express");
const app = express();

const post = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/adder", function (req, res) {
  let one = req.query.one;
  let two = req.query.two;
  let result = Number(one) + Number(two);
  res.send(String(result));
});

app.listen(3000, function () {
  console.log(`Server listening on port ${post} 🚚`);
});
