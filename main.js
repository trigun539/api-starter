var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Hello world

app.get('/', function (req, res, next) {
	res.send('Hello World');
});

app.listen(3000, function() {
	console.log('App started');
});
