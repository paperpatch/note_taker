const router = require('express').Router();
const { validateNotes, writeNotes, deleteNotes, findID } = require('../../lib/notes');
const { notes } = require('../../database/database.json')
const shortID = 

router.get('/notes', (req, res) => {
  let results = notes;
  if (!req.body) {
    res.status(400).send("Notes is not properly formatted.");
  } else {
    res.json(results);
  }
})

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('Notes is not properly formatted.');
  } else {
    const note = writeNotes(req.body, notes);
    res.json(note);
  }
})

router.delete('/notes', (req, res) => {
  req.body.id = notes.id;
})

app.delete('/notes', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;