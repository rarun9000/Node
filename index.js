const express = require('express');
const Joi = require('joi');
const app = express();

const home = require('./routes/home');
app.use('/', home);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

console.log("Listening");