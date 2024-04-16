const { Router } = require('express');
const tasksRouter = require('./tasksRoutes');

const routes = Router();

routes.use("/", tasksRouter)

module.exports = routes