const fs = require('fs');
const path = require('path');

function createNewNotes(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../database/database.json'),
    JSON.stringify({ notes }, null, 2)
  );
  return notes;
}

function validateNotes(notes) {
  if (!notes.title || typeof notes.title !== 'string') {
    return false;
  }
  if (!notes.text || typeof notes.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  validateNotes, createNewNotes
}