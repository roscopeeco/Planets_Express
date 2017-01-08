var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var http = require('http');
var app = express();

dotenv.load();

app.get(
    '/api/planets',
    function (req, res) {
        res.sendFile(__dirname + '/public/data/planets.json');
    }
);

app.use(
	'/',
	express.static(__dirname + '/public')
);

app.use(
	function(req, res, next) {
		res.status(404).send('Sorry cant find that!');
	}
);

var port = process.env.PORT;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

module.exports = app;
