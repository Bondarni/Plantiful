const Router = require('express').Router()
const controller = require('../controllers/AreaController')

Router.get('/', controller.GetAllAreas)
Router.get('/:area_id', controller.GetAreaById)
Router.post('/', controller.AddArea)
Router.put('/:area_id', controller.EditArea)
Router.delete('/:area_id', controller.DeleteArea)

module.exports = Router
