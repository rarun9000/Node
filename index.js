const express = require('express');
const Joi = require('joi');
const app = express();

const home = require('./routes/home');
app.use('/', home);
app.listen(3000);
console.log("Listening");