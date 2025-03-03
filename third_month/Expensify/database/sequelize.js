const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expensify', 'root', '@Chrisvibe070697000', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize