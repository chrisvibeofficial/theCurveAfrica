const { createUser, getUsers, getUser, deleteUser} = require('../controller/userController');
const userRouter = require('express').Router();

userRouter.get('/user', getUsers);
userRouter.get('/user/:id', getUser);
userRouter.post('/user', createUser);
userRouter.delete('/user/:id', deleteUser);


module.exports = userRouter;