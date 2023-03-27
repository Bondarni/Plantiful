const Router = require('express').Router()
const controller = require('../controllers/PlantController')

Router.get('/', controller.GetPlants)
Router.get('/:plant_id', controller.GetPlantById)
Router.post('/', controller.AddPlant)
Router.put('/:plant_id', controller.EditPlant)
Router.delete('/:plant_id', controller.DeletePlant)

module.exports = Router
