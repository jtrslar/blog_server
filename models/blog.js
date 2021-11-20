const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Blog = sequelize.define(
  'blog',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    file: Sequelize.STRING,
    title: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
)

Blog.sync()

module.exports = Blog
