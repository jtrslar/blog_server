const Sequelize = require('sequelize')
const config = require('../config/database.json')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
  // 设置下划线字段风格
  underscored: true,
  define: {
    freezeTableName: true,
  },
})

module.exports = sequelize
