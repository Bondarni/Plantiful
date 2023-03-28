const Router = require('express').Router()
const controller = require('../controllers/AreaController')

Router.get('/', controller.GetAllAreas)

module.exports = Router
