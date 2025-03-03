require('dotenv').config();
require('./config/database');
const express = require('express');
const PORT = process.env.PORT || 4739;
const managementRouter = require('./routes/managementRouter');

const app = express();

app.use(express.json());
app.use('/api/v1', managementRouter)


app.listen(PORT, () => {
  console.log(`Server is listening to Port: ${PORT}`)
});