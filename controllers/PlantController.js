const { Plant } = require('../models')

const GetPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll()
    res.send(plants)
  } catch (error) {
    throw error
  }
}

const GetPlantById = async (req, res) => {
  try {
    let plantId = parseInt(req.params.plant_id)
    const plant = await Plant.findAll({
      where: {
        id: plantId
      }
    })
    res.send(plant)
  } catch (error) {
    throw error
  }
}

const EditPlant = async (req, res) => {
  try {
    let plantId = parseInt(req.params.plant_id)
    let updatedPlant = await Plant.update(req.body, {
      where: {
        id: plantId
      },
      returning: true
    })
    res.send(updatedPlant)
  } catch (error) {
    throw error
  }
}

const DeletePlant = async (req, res) => {
  try {
    let plantId = parseInt(req.params.plant_id)
    await Plant.destroy({
      where: {
        id: plantId
      },
      returning: true
    })
    res.send({ message: 'Plant erased' })
  } catch (error) {
    throw error
  }
}

const AddPlant = async (req, res) => {
  try {
    let newPlant = await Plant.create(req.body)
    res.send(newPlant)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlants,
  GetPlantById,
  EditPlant,
  DeletePlant,
  AddPlant
}
