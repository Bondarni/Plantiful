const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PlantRouter = require('./PlantRouter')
const EnvironmentRouter = require('./EnvironmentRouter')

Router.use('/users', UserRouter)
Router.use('/plants', PlantRouter)
Router.use('/environments', EnvironmentRouter)

module.exports = Router
