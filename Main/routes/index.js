const express = require('express');

const departmentRouter = require('./department');
const employeeRouter = require('./employee');
const roleRouter = require('./role');

const app = express();

app.use('/department', departmentRouter);
app.use('/employee', employeeRouter);
app.use('/role', roleRouter);

module.exports = app;
