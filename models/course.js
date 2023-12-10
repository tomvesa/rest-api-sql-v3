'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {}
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    estimatedTime: DataTypes.STRING,
    materialsNeeded: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course',
  });

  Course.associate = (model) => {
    Course.belongsTo(model.User, {
      foreignKey: {
        fieldName: 'coursePersonId',
        allowNull: false,
      },
    });
  }
  return Course;
};