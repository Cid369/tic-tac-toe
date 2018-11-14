'use strict'

const store = require('../store.js')

const createGameSuccess = (createGameResponse) => {
  console.log('store object before adding user ', store)
  store.currentGame = createGameResponse.game
  $('#message').html('Game created successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#new-game-button').removeClass('hidden')
  $('#start-game-button').addClass('hidden')
}

const updateGameSuccess = (updateGameResponse) => {
  console.log('store object before adding user ', store)
  store.currentGame = updateGameResponse.game
  $('#message').html('Next player.')
}

// const boardSuccess = (boardResponse) => {
//   $('#message').html('Next player.')
//   $('#message').addClass('success-message')
//   $('#message').removeClass('error-message')
// }

module.exports = {
  createGameSuccess,
  updateGameSuccess
  // boardSuccess
}
