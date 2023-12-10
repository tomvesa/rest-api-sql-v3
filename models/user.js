'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (model) => {
    User.hasMany(model.Course, {
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      },
    });
  }

  return User;
};