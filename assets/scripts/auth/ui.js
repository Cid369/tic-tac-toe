'use strict'

const store = require('../store.js')

const failure = function (signUpFailureResponse) {
  $('#message').html('Get it together and try again!')
  // $('#message').css('color', 'red')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  // form clears
  $(event.target).trigger('reset')
  console.log('sign up ran! signUpResponse is ', signUpResponse)
}

const signInSuccess = function (signInResponse) {
  console.log('store object before adding user ', store)
  store.user = signInResponse.user
  $('#message').html('You signed in successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess
}
