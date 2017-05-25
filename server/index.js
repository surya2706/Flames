var express = require("express");
var app = express();
const path = require("path");
bodyParser = require("body-parser");
const helper = require('./helper');
// import lengthAfterCancellation from './helper';

app.use(bodyParser.json());

app.use(
  express.static(
    path.join("/Volumes/HD2/Projects/node_project/flames_project", "build")
  )
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/getResult", function(req, res) {
  var name1 = req.body.name_1.toLowerCase().replace(" ", "");
  var name2 = req.body.name_2.toLowerCase().replace(" ", "");
  lengthOfName1 = name1.length;
  lengthOfName2 = name2.length;
  console.log("name1: ", name1, "name2: ", name2);
  totalLength = helper.lengthAfterCancellation(
    lengthOfName1,
    lengthOfName2,
    name1,
    name2
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("thanks");
});

app.listen(3000, function() {
  console.log("started server on port 3000");
});
