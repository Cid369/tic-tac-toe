'use strict'

const store = require('../store.js')

const createGameSuccess = (createGameResponse) => {
  // console.log('store object before adding user ', store)
  store.game = createGameResponse.game
  $('#message').html('Game created successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#new-game-button').removeClass('hidden')
  $('#start-game-button').addClass('hidden')
  // $('#bord-container').
}

const updateGameSuccess = (updateGameResponse) => {
  // console.log('store object before adding user ', store)
  store.game = updateGameResponse.game
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
