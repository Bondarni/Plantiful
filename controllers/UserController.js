const { User, Plant, Environment } = require('../models')

const GetUserProfile = async (req, res) => {
  try {
    const userAndTweets = await User.findByPk(req.params.user_id, {
      include: [
        { model: Plant, as: 'plants' },
        { model: Environment, as: 'environments' }
      ]
    })
    res.send(userAndTweets)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserProfile
}
