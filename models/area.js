'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Area.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
      Area.hasMany(models.Plant, { foreignKey: 'areaId', as: 'plants' })
    }
  }
  Area.init(
    {
      name: DataTypes.STRING,
      temp: DataTypes.INTEGER,
      airQuality: DataTypes.STRING,
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
      modelName: 'Area',
      tableName: 'areas'
    }
  )
  return Area
}
