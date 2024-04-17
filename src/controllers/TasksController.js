const TaskServices = require('../services/TaskServices');

const taskServices = new TaskServices()

class TasksController {
  insertTask(req, res) {
    taskServices.insertTask(req.body, (error, result) => {
      if (error) {
        return res.status(500).send(error)
      } else {
        return res.status(201).json(result[0])
      }
    })
  }

  listTasks(req, res) {
    taskServices.listTask((error, result) => {
      if (error) {
        return res.status(500).send(error)
      } else {
        return res.status(200).json(result)
      }
    })
  }

  updateTask(req, res) {
    taskServices.updateTask(req.params.id, req.body, (error, result) => {
      if (error) {
        return res.status(500).send(error)
      } else {
        return res.status(200).json(result[0])
      }
    })
  }

  deleteTask(req, res) {
    taskServices.deleteTask(req.params.id, (error, result) => {
      if (error) {
        return res.status(500).send(error)
      } else {
        return res.status(200).json(result[0])
      }
    })
  }
}

module.exports = TasksController