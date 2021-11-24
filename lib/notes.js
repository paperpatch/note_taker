const fs = require('fs');
const path = require('path');

function validateNotes(notes) {
  if (!notes.title || typeof notes.title !== 'string') {
    return false;
  }
  if (!notes.text || typeof notes.text !== 'string') {
    return false;
  }
  return true;
}

function writeNotes(body, notes) {
  const note = body;
  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../database/database.json'),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

function deleteNotes(id, notes) {
  const toBeDeleted = notes.filter(note => note.id === id)[0];
  const results =  notes.indexOf(toBeDeleted);

  notes.splice(results, 1);

  fs.writeFileSync(
    path.join(__dirname, '../database/database.json'),
    JSON.stringify({ notes }, null, 2)
  )
}

function findID(id, notes) {
  const result = notes.filter(note => note.id === id)[0];
  return result;
}


module.exports = {
  validateNotes, writeNotes, deleteNotes, findID
}