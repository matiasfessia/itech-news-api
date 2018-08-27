'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()

const api = require('./routes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())

app.use('/api', api)

module.exports = app