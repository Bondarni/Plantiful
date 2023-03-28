const { Area, Plant } = require('../models')

const GetAllAreas = async (req, res) => {
  try {
    let areas = await Area.findAll()
    res.send(areas)
  } catch (error) {
    throw error
  }
}

const GetAreaById = async (req, res) => {
  try {
    let areaId = parseInt(req.params.area_id)
    const area = await Area.findAll({
      where: {
        id: areaId
      },
      include: [{ model: Plant, as: 'plants' }]
    })
    res.send(area)
  } catch (error) {
    throw error
  }
}

const EditArea = async (req, res) => {
  try {
    let areaId = parseInt(req.params.area_id)
    let updatedArea = await Area.update(req.body, {
      where: {
        id: areaId
      },
      returning: true
    })
    res.send(updatedArea)
  } catch (error) {
    throw error
  }
}

const DeleteArea = async (req, res) => {
  try {
    let areaId = parseInt(req.params.area_id)
    await Area.destroy({
      where: {
        id: areaId
      },
      returing: true
    })
    res.send({ message: 'Area erased' })
  } catch (error) {
    throw error
  }
}

const AddArea = async (req, res) => {
  try {
    let newArea = await Area.create(req.body)
    res.send(newArea)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllAreas,
  GetAreaById,
  EditArea,
  DeleteArea,
  AddArea
}
