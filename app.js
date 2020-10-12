const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger('dev'));
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.render('index');
});

app.post('/show', (req, res) => {
	const firstname = req.body.firstName;
	const lastname = req.body.lastName;

	const character = {
		firstname: firstname,
		lastname: lastname
	};

	res.render('tab', {
		character: character
	});
});

app.listen(3000, () => {
	console.log("Express server running at http://127.0.0.1:3000/");
});
