'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      employeInfo.associate = (models)=>{ 
        employeInfo.hasMany(models.employePerformance, {foreignKey: 'employeeId', as:"employePerformance"})}
    }
  }
  employeInfo.init({
    fullName: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isMarried: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'employeInfo',
  });
  return employeInfo
};