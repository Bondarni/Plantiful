const { User, Area, Plant } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      include: [
        { model: Area, as: 'areas', include: [{ model: Plant, as: 'plants' }] }
      ]
    })
    let matched = await middleware.comparePassword(
      user.password,
      req.body.password
    )
    if (matched) {
      let payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        zipCode: user.zipCode,
        areas: user.areas,
        plants: user.plants
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'An error has occured!' })
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, zipCode } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: passwordDigest,
      zipCode,
      areas: user.areas,
      plants: user.plants
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let password = await middleware.hashPassword(newPassword)
      await user.update({ password })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const CheckSession = async (req, res) => {
  try {
    const { payload } = res.locals
    const foundUser = await User.findOne({
      include: [
        { model: Area, as: 'areas' },
        { model: Plant, as: 'plants' }
      ],
      where: { email: payload.email },
      raw: true
    })
    const user = {
      id: foundUser.id,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      zipCode: foundUser.zipCode,
      areas: foundUser.areas,
      plants: foundUser.plants
    }
    res.send(user)
  } catch (error) {
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred checking the session!'
    })
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
