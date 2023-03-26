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
    }
  }
  Plant.init(
    {
      taxName: DataTypes.STRING,
      nickName: DataTypes.STRING,
      needWater: DataTypes.BOOLEAN,
      needSun: DataTypes.BOOLEAN,
      needCheckup: DataTypes.BOOLEAN,
      ploints: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      environmentId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Plant',
      tableName: 'plants'
    }
  )
  return Plant
}
