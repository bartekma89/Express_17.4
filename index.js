const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

let root = path.resolve(__dirname, 'public');

app.get('/', function(req, res) {
	res.sendFile(root + '/main.html');
});

app.get('*', function(req, res) {
	res.send('Wrong url');
});

let server = app.listen(3000, 'localhost', function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log(`nasluchujemy http://${host}:${port}`);
});
