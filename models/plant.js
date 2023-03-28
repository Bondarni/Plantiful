'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plant.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
      Plant.belongsTo(models.Area, { foreignKey: 'areaId', as: 'areas' })
    }
  }
  Plant.init(
    {
      kind: DataTypes.STRING,
      nickName: DataTypes.STRING,
      needWater: DataTypes.BOOLEAN,
      needSun: DataTypes.BOOLEAN,
      needCheckup: DataTypes.BOOLEAN,
      ploints: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      areaId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'areas',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Plant',
      tableName: 'plants'
    }
  )
  return Plant
}
