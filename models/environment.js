'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Environment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Environment.hasMany(models.Plant, { foreignKey: 'environmentId' })
      Environment.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Environment.init(
    {
      name: DataTypes.STRING,
      temperature: DataTypes.INTEGER,
      airStatus: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Environment',
      tableName: 'environments'
    }
  )
  return Environment
}
