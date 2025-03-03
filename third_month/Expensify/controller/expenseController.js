const expenseModel = require('../models/expense');
const categoryModel = require('../models/category');
const userModel = require('../models/user');
const { Op } = require('sequelize');
const category = require('../models/category');


exports.createExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await categoryModel.findOne({ where: { userId: id } });

    if (!existingUser) {
      return res.status(404).json('No category has been created for this user');
    }

    const date = new Date();
    const newDate = date.toLocaleDateString();

    const randomNum = Math.floor(Math.random() * 100000);
    const ID = 'EXP' + randomNum

    const { categoryName, amount } = req.body;

    const existindCategoryName = await expenseModel.findOne({ where: { categoryName: categoryName, userId: id } });

    if (existindCategoryName) {
      return res.status(400).json(`${categoryName} created already. Please update the price instead`)
    }

    const data = {
      id: ID,
      userId: existingUser.dataValues.userId,
      categoryId: existingUser.dataValues.id,
      categoryName,
      amount,
      startDate: newDate,
      endDate: newDate
    };

    console.log(data);


    const newExpense = await expenseModel.create(data);
    res.status(201).json({
      message: `Expenses created for successfully`,
      data: newExpense
    });

  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const allExpenses = await expenseModel.findAll();
    res.status(200).json({
      message: 'Expenses by all users',
      total: allExpenses.length,
      data: allExpenses
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


exports.getAllExpensesByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await categoryModel.findOne({ where: { userId: id } });
    console.log(checkUser);

    if (!checkUser) {
      return res.status(400).json('Category for this user does not exist');
    }

    const userExpenses = await expenseModel.findAll({ where: { userId: id } });
    res.status(200).json({
      message: 'Expenses by this user',
      total: userExpenses.length,
      data: userExpenses
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


exports.updateCategoryName = async (req, res) => {
  try {
    const { id, categoryName } = req.params;
    const checkcategoryName = await expenseModel.findOne({ where: { userId: id, categoryName: categoryName } });

    if (!checkcategoryName) {
      return res.status(404).json('Category for user not found');
    }

    const data = req.body.categoryName;

    await checkcategoryName.update({ categoryName: data });
    const update = await expenseModel.findOne({ where: { userId: id } });
    res.status(200).json({
      message: 'Update successfully',
      update
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


exports.updateCategoryAmount = async (req, res) => {
  try {
    const { id, categoryName } = req.params;
    const checkcategoryName = await expenseModel.findOne({ where: { userId: id, categoryName: categoryName } });

    if (!checkcategoryName) {
      return res.status(404).json('Category for user not found');
    }

    const data = req.body.amount;

    await checkcategoryName.update({ amount: data });
    const update = await expenseModel.findOne({ where: { userId: id } });
    res.status(200).json({
      message: 'Update successfully',
      update
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


exports.deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await expenseModel.findOne({ where: { id: id } });

    if (!checkUser) {
      return res.status(400).json('User does not exist');
    }

    const userExpenses = await expenseModel.findOne({ where: { userId: checkUser.dataValues.id } });
    await expenseModel.destroy({ where: { user: checkUser.dataValues.id } });
    res.status(200).json('Deleted successfully');
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};

exports.calculateTotalExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const { startDate, endDate } = req.body;
    const checkUser = await expenseModel.findOne({ where: { userId: id } });

    if (!checkUser) {
      return res.status(400).json('User does not exist');
    }

    const expenses = await expenseModel.findAll({
      where: {
        startDate: {
          [Op.between]: [startDate, endDate]
        }
      }
    });

    console.log(expenses);
    

    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    res.status(200).json({
      message: `Total expenses from ${startDate} to ${endDate}`,
      totalAmount: totalAmount
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
};


// exports.calculateExpensesByDescription = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description, startDate, endDate } = req.body;
//     const checkUser = await userModel.findOne({ where: { id: id } });

//     if (!checkUser) {
//       return res.status(400).json('User does not exist');
//     }

//     const expenses = await expensesModel.findAll({
//       where: {
//         userId: checkUser.dataValues.id,
//         description: description,
//         startDate: {
//           [Op.between]: [startDate, endDate]
//         }
//       }
//     });

//     const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

//     res.status(200).json({
//       message: `Total expenses from ${startDate} to ${endDate}`,
//       totalAmount: totalAmount
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Internal server error',
//       error: error.message
//     });
//   }
// };

