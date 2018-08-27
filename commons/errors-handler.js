'use strict'

var errors = {
  BAS001: 'This value is required',
  BAS002: 'This value is to long',
  PRO001: 'The product already exists'
}

function getError(code) {
  return {
    code: 'GEN001',
    message: errors[code]
  }
}

module.exports = {
  getError
}