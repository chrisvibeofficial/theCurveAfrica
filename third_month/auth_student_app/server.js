require('dotenv').config();
require('./config/database');
const express = require('express');
const PORT = process.env.PORT || 4857;
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use('/api/v1', userRouter);


app.listen(PORT, ()=>{
  console.log(`Server is listening to Port: ${PORT}`)
})