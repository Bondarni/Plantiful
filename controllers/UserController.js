const { User, Plant } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserWithPlants = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const data = await User.findAll({
      where: {
        id: userId
      },
      include: [{ model: Plant, as: 'plants' }]
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const DeleteUserProfile = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({
      where: { id: userId },
      returning: true
    })
    res.send({ message: 'User Profile Erased' })
  } catch (error) {
    throw error
  }
}

const EditUserProfile = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const CreateUserProfile = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  DeleteUserProfile,
  CreateUserProfile,
  EditUserProfile,
  GetUserWithPlants
}
