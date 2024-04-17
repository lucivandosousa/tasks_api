const { db } = require('../config/database');
class TaskServices {

  insertTask(body, fnCallBack) {
    const sql = "INSERT INTO tasks (description, concluded) VALUES (?, ?) returning id";

    db.all(sql, [body.description, body.concluded], (error, rows) => {
      fnCallBack(error, rows)
    })
  }

  listTask(fnCallBack) {
    const sql = "SELECT * FROM tasks";

    db.all(sql, [], (error, rows) => {
      fnCallBack(error, rows)
    })
  }

  updateTask(id, body, fnCallBack) {
    const sql = "UPDATE tasks set description=?, concluded=? WHERE id=? returning id";

    db.all(sql, [body.description, body.concluded, id], (error, rows) => {
      fnCallBack(error, rows)
    })
  }

  deleteTask(id, fnCallBack) {
    const sql = "DELETE FROM tasks WHERE id=? returning id";

    db.all(sql, [id], (error, rows) => {
      fnCallBack(error, rows)
    })
  }

}

module.exports = TaskServices