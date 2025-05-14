const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('basic', 'root', '2727', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
},{tableName:'Sequelize'});

module.exports = { sequelize, User };
