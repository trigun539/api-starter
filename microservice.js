var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var users = [
	{ id: 1, name: 'Edwin'},
	{ id: 2, name: 'Derrick'},
	{ id: 3, name: 'Quang'}
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Hello world

app.get('/', function (req, res, next) {
	res.send('Hello World');
});

app.get('/api/users', function (req, res, next) {
	res.send(users);
});

app.post('/api/users', function (req, res, next) {
	// var param = req.params['param_name'] => /api/users/:id
	// var limit = req.query['limit'] => /api/users?limit=7
	var name = { id: users.length+2, name: req.body.name };
	console.log(req.body.test, typeof(req.body.test));
	users.push(name);

	res.send(name);
});

app.put('/api/users/:id', function (req, res, next) {
	var id = parseInt(req.params.id);
	// var id = req.params.id;
	var name = req.body.name;
	var theUser = {};

	console.log('The id: ', id, typeof(id));
	for (var i = 0; i < users.length; i++) {
		if (users[i].id === id) {
			users[i].name = name;
			res.send(users[i]);
			break;
		}
	}

	res.status(404).send('User not found');
});


app.listen(3000, function() {
	console.log('App started');
});
