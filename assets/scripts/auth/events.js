'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  console.log('working?')
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn
}
