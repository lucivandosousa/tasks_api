const sqlite3 = require('sqlite3');

const path = require("path")
const pathDB = path.resolve("src", "database", "db.sqlite")

const SQLite3 = sqlite3.verbose();

const db = new SQLite3.Database(pathDB, SQLite3.OPEN_READWRITE, (error) => {
  if (error) {
    console.log("error connecting to the database: " + error)
  }
})

module.exports = { db }