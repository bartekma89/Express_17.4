const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/userForm', function(req, res) {
	const response = {
		firstName: req.query.first_name,
		lastName: req.query.last_name,
	};

	res.send(JSON.stringify(response, null, 4));
});

app.get('*', function(req, res) {
	res.send('Wrong url');
});

let server = app.listen(3000, 'localhost', function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log(`nasluchujemy http://${host}:${port}`);
});
