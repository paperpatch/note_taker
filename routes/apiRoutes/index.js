const router = require('express').Router();
const { validateNotes, writeNotes, deleteNotes, findID } = require('../../lib/notes');
const { notes } = require('../../database/database.json')
const uniqueID = require('uniqid')

router.get('/notes', (req, res) => {
  let results = notes;
  if (!req.body) {
    res.status(400).send("Notes is not properly formatted.");
  } else {
    res.json(results);
  }
})

router.get('/notes/:id', (req, res) => {
  const result = findID(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
})

router.post('/notes', (req, res) => {
  // make new unique id
  req.body.id = uniqueID.process();

  if (!validateNotes(req.body)) {
    res.status(400).send('Notes is not properly formatted.');
  } else {
    const note = writeNotes(req.body, notes);
    res.json(note);
  }
})

router.delete('/notes/:id', (req, res) => {
  const notesID = req.params.id;
  const notesExist = findID(notesID, notes);

  if (notesExist) {
    const newNotes = deleteNotes(notesID, notes);
    res.json(newNotes);
  } else {
    res.send(404);
  }
})

module.exports = router;