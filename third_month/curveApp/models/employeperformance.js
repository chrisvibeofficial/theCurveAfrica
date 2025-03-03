'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employePerformance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      employePerformance.associate = (models)=>{
          employePerformance.belongsTo(
          models.employeInfo,{foreignKey:"employeeId", as:"employeInfo"}
          )
      }
    }
  }
  employePerformance.init({
    employeeId: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    puctuality: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employePerformance',
  });
  return employePerformance;
};