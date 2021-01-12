'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/img', (req, res) => {
	const { imgData } = req;

	console.log(imgData);

	res.json({ message: 'Got it!' });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))