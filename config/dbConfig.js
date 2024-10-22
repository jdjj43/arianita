const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/mmpi2fr.db', (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Conectado a la base de datos.');
});

// Cierra la base de datos al finalizar el proceso
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la base de datos:', err.message);
    } else {
      console.log('Base de datos cerrada.');
    }
    process.exit(0);
  });
});

module.exports = db;
