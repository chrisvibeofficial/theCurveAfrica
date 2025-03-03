const { createCategory, getCategories, getCategory, updateCategory, deleteAllCategories, deleteOneCategory } = require('../controller/categoryController');
const categoryRouter= require('express').Router();

categoryRouter.post('/category/:id', createCategory);
categoryRouter.get('/category', getCategories);
categoryRouter.get('/category/:id', getCategory);
categoryRouter.put('/category/:id/:category', updateCategory);
categoryRouter.delete('/category/:id', deleteAllCategories);
categoryRouter.delete('/category/:id', deleteOneCategory);

module.exports = categoryRouter;