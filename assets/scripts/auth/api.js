'use strict'

const store = require('../store.js')

const signUp = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

module.exports = {
  signUp,
  signIn
}
