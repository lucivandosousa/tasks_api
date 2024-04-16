const { Router } = require('express');
const TasksController = require('../controllers/TasksController');

const tasksRouter = Router()

const tasksController = new TasksController()

tasksRouter.post("/tasks", tasksController.insertTask)

tasksRouter.get("/tasks", tasksController.listTasks)

tasksRouter.put("/tasks/:id", tasksController.updateTask)

tasksRouter.delete("/tasks/:id", tasksController.deleteTask)

module.exports = tasksRouter