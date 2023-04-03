const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PlantRouter = require('./PlantRouter')
const AreaRouter = require('./AreaRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/plants', PlantRouter)
Router.use('/areas', AreaRouter)

module.exports = Router
