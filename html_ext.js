var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"view/index.html"));
})

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})