const sqlite3 = require('sqlite3');

const SQLite3 = sqlite3.verbose();

const db = new SQLite3.Database("../database/db.sqlite", SQLite3.OPEN_READWRITE, (error) => {
  if (error) {
    console.log("error connecting to the database: " + error)
  }
})

module.exports = { db }