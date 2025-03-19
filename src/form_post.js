var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"view/form_post.html"));
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 });

app.post("/process_post",  urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   console.log(req.body);
   res.end(JSON.stringify(response));
});

app.post('/users-list', (req, res) => {
   const usersList = req.body;
 
   // Save the data of user that was sent by the client
 
   // Send a response to client that will show that the request was successfull.
   res.send({
     message: 'New user was added to the list',
   });
 });

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
});