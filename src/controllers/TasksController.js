const TaskServices = require('../services/TaskServices');

const taskServices = new TaskServices()

class TasksController {
  insertTask(req, res) {
    res.status(200).send("Tasks")
  }

  listTasks(req, res) {
    res.status(200).send("Tasks")
  }

  updateTask(req, res) {
    res.status(200).send("Tasks")
  }

  deleteTask(req, res) {
    res.status(200).send("Tasks")
  }
}

module.exports = TasksController