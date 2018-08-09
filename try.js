const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

var gitAdd = "We are adding something to the repo";
var gitAdd2 = "What if I want to add this to the repository now?";

var firstFunction = () => {
	return "just a simple arrow function to commit."
};

let Person = {
	name: 'Valentijn',
	age: 23
};


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});