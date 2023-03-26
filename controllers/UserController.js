const { User, Plant, Environment } = require('../models')

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
    const userinfo = await User.findByPk(req.params.user_id, {
      include: [
        { model: Plant, as: 'Plants' },
        { model: Environment, as: 'Environments' }
      ]
    })
    res.send(userinfo)
  } catch (error) {
    throw error
  }
}

const DeleteUserProfile = async (req, res) => {
  try {
    await User.delete(req.params.user_id)
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
    const userinfo = {
      firstName,
      LastName,
      email,
      password,
      zipCode
    }
    const user = await User.create(userinfo)
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
