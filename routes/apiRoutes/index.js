const router = require('express').Router();
const { validateNotes } = require('../../lib/notes');
const { notes } = require('../../database/database.json')

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('Notes is not properly formatted.');
  } else {
    const notes = createNewNotes(req.body, notes);
    res.json(notes);
  }
})

module.exports = router;