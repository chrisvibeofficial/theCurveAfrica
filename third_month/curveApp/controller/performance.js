const { UUIDV4 } = require('sequelize');
const { employePerformance } = require('../models');
const  {v4:uuidv4, validate} = require ("uuid")
const date = new Date
console.log(date.toLocaleDateString())
exports.createPerformance = async (req, res) => {
  try {

    const date = new Date
    const {employeeId} = req.params;
   
    const {rating} = req.body;
    const punctuality = date.toLocaleDateString()
    //  const checkEmployee = await employeperformance.findByPk(employeeId)

    //  if (!checkEmployee) {
    //   return res.status(404).json({message: 'Employee not found'});
    //  }
     const data = {
      id:uuidv4(),
      employeeId:employeeId,
      rating: rating +'%',
      puctuality: punctuality
     }
     const employeePerformance = await employePerformance.create(data);
     res.status(201).json({
      message: 'Employee performance created successfully',
      data: employeePerformance
     })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      
      message: 'Internal server error',
      error: error.message
    })
  }
}