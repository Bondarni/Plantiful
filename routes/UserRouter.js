const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetGardenerDeets)
Router.delete('/:user_id', controller.DeleteUserProfile)
Router.put('/:user_id', controller.EditUserProfile)
Router.post('/', controller.CreateUserProfile)

module.exports = Router
