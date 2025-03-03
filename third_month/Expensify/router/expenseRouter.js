const { createExpenses, getAllExpenses, getAllExpensesByUser, updateCategoryName, updateCategoryAmount, deleteExpenses, calculateTotalExpenses } = require('../controller/expenseController');
const expensesRouter = require('express').Router();

expensesRouter.get('/expenses', getAllExpenses);
expensesRouter.get('/expenses/:id', getAllExpensesByUser);
expensesRouter.post('/expenses/:id', createExpenses);
expensesRouter.put('/expenses-name/:id/:categoryName', updateCategoryName);
expensesRouter.put('/expenses-amount/:id/:categoryName', updateCategoryAmount);
expensesRouter.delete('/expenses/:id', deleteExpenses);
expensesRouter.post('/expenses-total/:id', calculateTotalExpenses);
// expensesRouter.post('/user-expenses-total/:id', calculateTotalExpenses);


module.exports = expensesRouter;