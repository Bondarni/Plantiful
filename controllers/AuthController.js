const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    })
    console.log(user)
    let matched = await middleware.comparePassword(
      user.password,
      req.body.password
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
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
      zipCode
    })
    res.send(user)
  } catch (error) {
    console.log('register didnt work')
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
    console.log(error)
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
      where: { email: payload.email },
      raw: true
    })
    const user = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name
    }
    res.send(user)
  } catch (error) {
    console.log(error)
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
