'use strict'

const store = require('../store.js')

const failure = (signUpFailureResponse) => {
  $('#message').html('Get it together and try again!')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

const signUpSuccess = (signUpResponse) => {
  $('#message').html('You signed up successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  // console.log('sign up ran! signUpResponse is ', signUpResponse)
  // Maria helped me on this.
}

const signInSuccess = (signInResponse) => {
  console.log('store object before adding user ', store)
  store.user = signInResponse.user
  $('#message').html('You signed in successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#start-game-button').removeClass('hidden')
}

const changePasswordSuccess = (changePasswordResponse) => {
  console.log('store object before adding user ', store)
  $('#message').html('You changed password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}

const signOutSuccess = (signOutResponse) => {
  $('#message').html('You should have stay :(')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

// const boardSuccess = (boardResponse) => {
//   $('#message').html('Next player.')
//   $('#message').addClass('success-message')
//   $('#message').removeClass('error-message')
// }
//
module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
  // boardSuccess
}
