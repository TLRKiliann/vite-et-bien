const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;

const date = new Date();

const notes = [
	{
		'id': 1,
		'name': 'Doug',
		'age': 44
	},
	{
		'id': 2,
		'name': 'Jess',
		'age': 25
	},
	{
		'id': 3,
		'name': 'Celestine',
		'age': 38
	}
];

app.get('/notes', (request, response) => {
	response.status(200).json(notes)
});

app.get('/notes/:id', (request, response) => {
	const id = Number(request.params.id);
	console.log(id)
	const note = notes.find(note => note.id === id); 
	response.status(200).json(note)
});

app.get('/info', (request, response) => {
	const msg = `This is a page information : ${notes.length} ${date}`;
	response.status(200).send(msg)
});

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));