var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

app.post('/newReq', function(req, res){
    console.log(req.params);
    res.send("aaaaaa");
});


app.use(function(req, res) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(8001, function () {
    console.log('Example app listening on port 3000.');
});