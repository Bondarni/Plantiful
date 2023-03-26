'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('plants', [
      {
        kind: 'Monstera deliciosa',
        nickName: 'Manni',
        needWater: 'False',
        needSun: 'False',
        ploints: 90,
        userId: 2,
        environmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kind: 'Monstera deliciosa',
        nickName: 'Barb',
        needWater: 'False',
        needSun: 'True',
        ploints: 60,
        userId: 2,
        environmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('plants', null, {})
  }
}
