const fs = require('fs');
const yargs = require('yargs');

const notesFile = 'notes.json';

yargs.version('1.0.0');


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const notes = loadNotes();

  
    const duplicateNote = notes.find((note) => note.title === argv.title);

    if (!duplicateNote) {
      notes.push({
        title: argv.title,
        body: argv.body
      });

      saveNotes(notes);
      console.log('Nota Agregada!');
    } else {
      console.log('Una nota con el mismo titulo ya existe!.');
    }
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== argv.title);

    if (notes.length === filteredNotes.length) {
      console.log('No se encontro una nota con ese titulo.');
    } else {
      saveNotes(filteredNotes);

      console.log('Nota removida!');
    }
  }
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    const notes = loadNotes();

    console.log('Your notes:');
    notes.forEach((note) => {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
      console.log('---');
    });
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === argv.title);

    if (note) {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    } else {
      console.log('No se encontro una nota con ese titulo.');
    }
  }
});

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync(notesFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(notesFile, dataJSON);
}

yargs.parse();

