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
      Plant.belongsTo(models.User, { foreignKey: 'userId' })
      Plant.belongsTo(models.Environment, { foreginKey: 'environmentId' })
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
      environmentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'environments',
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
