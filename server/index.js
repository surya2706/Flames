import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { lengthAfterCancellation, getLetter } from "./helper";
var app = express();

app.use(bodyParser.json());

const static_dir = path.join(__dirname, "../static/");

console.log(`static_dir : ${static_dir}`);

app.use(express.static(static_dir));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.post("/getResult", function(req, res) {
  console.log(req.body.name_1, req.body.name_2);
  var name1 = Array.from(req.body.name_1);
  var name2 = Array.from(req.body.name_2);
  console.log("name1: ", name1, "name2: ", name2);
  var totalLength = lengthAfterCancellation(name1, name2);
  console.log("totalLength :", totalLength);
  var flames = "FLAMES";
  var letter = getLetter(totalLength, flames);
  console.log("letter", letter);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ letter: letter }));
});

app.listen(3000, function() {
  console.log("started server on port 3000");
});
