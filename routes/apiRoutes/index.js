const router = require('express').Router();
const { validateNotes, createNewNotes } = require('../../lib/notes');
const { notes } = require('../../database/database.json')

router.get('/notes', (req, res) => {
  let results = notes;
  if (req) {
    res.json(results);
  }
})

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('Notes is not properly formatted.');
  } else {
    const note = createNewNotes(req.body, notes);
    res.json(note);
  }
})

module.exports = router;