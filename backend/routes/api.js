const express = require('express')
const router = express.Router()

const noteActions = require('../controler/noteActions')

//ENDPOINTY
router.get('/notes', noteActions.getAllNotes)
router.get('/notes/id', noteActions.getNote)
router.post('/notes', noteActions.saveNote)
router.put('/notes/:id', noteActions.updateNote)
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router