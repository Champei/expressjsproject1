const express = require('express');
const notesRoutes = express.Router();

const { createNote, readNote, listAllNotes, deleteGivenNote } = require('./notesController');

notesRoutes.post('/create-note', createNote);

notesRoutes.get('/list-notes', listAllNotes);

notesRoutes.get('/read-note/:name', readNote);

notesRoutes.put('/update-note/:name', createNote);

notesRoutes.delete('/delete-note/:name', deleteGivenNote);

module.exports = notesRoutes;