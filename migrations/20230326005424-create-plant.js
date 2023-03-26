'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taxName: {
        type: Sequelize.STRING
      },
      nickName: {
        type: Sequelize.STRING
      },
      needWater: {
        type: Sequelize.BOOLEAN
      },
      needSun: {
        type: Sequelize.BOOLEAN
      },
      needCheckup: {
        type: Sequelize.BOOLEAN
      },
      ploints: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      environmentId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plants')
  }
}
