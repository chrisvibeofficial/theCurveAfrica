require('./config/database');

const express = require('express');
const port = 3456;
const app = express();
const studentRouter = require('./router/studentRouter');
// const scoreRouter = require('./router/scoreRouter');

app.use(express.json());
app.use(studentRouter);
// app.use(scoreRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})