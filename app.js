'use strict'

const express = require('express');
const expressValidator = require('express-validator');

const app = express();

const api = require('./routes');
app.use(express.json());
app.use(expressValidator());

app.use('/api', api);

module.exports = app;