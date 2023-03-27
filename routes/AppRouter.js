const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PlantRouter = require('./PlantRouter')

Router.use('/users', UserRouter)
Router.use('/plants', PlantRouter)

module.exports = Router
