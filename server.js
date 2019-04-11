const express = require("express");
const app = express();
const port = 8080;
const ip= "0.0.0.0";
app.use(express.static("public"));
var path = require("path");
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var obj = {
  hello: "test text",
  hello2: {
    hello3: "by name is",
    hello4: ["1", 2]
  },
  hello5: "summer"
};

app.get("/", (req, res) => {
  res.render("./public/ss.html");
});

//to send the json file using redirect to show on browser url
app.get("/getapi", (req, res) => {
  res.redirect(303, "/url?" + JSON.stringify(obj));
});

//get request and show json data
app.get("/url", (req, res) => {
  res.json(obj);
});

app.listen(port,ip () => console.log(`Example app listening on port ${port}!`));
