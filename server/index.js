import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { lengthAfterCancellation } from './helper';
// var express = require("express");
var app = express();
// const path = require("path");
// const bodyParser = require("body-parser");
// const helper = require('./helper');
// import lengthAfterCancellation from './helper';

app.use(bodyParser.json());

const static_dir = path.join(__dirname, "../static/");

console.log(`static_dir : ${static_dir}`);

app.use(
  express.static(static_dir)
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post("/getResult", function(req, res) {
  var name1 = req.body.name_1.toLowerCase().replace(" ", "");
  var name2 = req.body.name_2.toLowerCase().replace(" ", "");
  name1 = Array.from(name1);
  name2 = Array.from(name2);
  console.log("name1: ", name1, "name2: ", name2);
  var lengthOfName1 = name1.length;
  var lengthOfName2 = name2.length;
  // console.log("lengthOfName1: ", lengthOfName1, "lengthOfName2: ", lengthOfName2);
  var totalLength = lengthAfterCancellation(
    lengthOfName1,
    lengthOfName2,
    name1,
    name2
  );
  console.log('totalLength :', totalLength);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("thanks");
});

app.listen(3000, function() {
  console.log("started server on port 3000");
});
