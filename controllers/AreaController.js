const { Area } = require('../models')

const GetAllAreas = async (req, res) => {
  try {
    let areas = await Area.findAll()
    res.send(areas)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllAreas
}
