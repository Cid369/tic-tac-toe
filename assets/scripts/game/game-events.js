'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./game-api.js')
const ui = require('./game-ui.js')
const store = require('../store.js')

const onCreateGame = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.createGame(userData)
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = (index, value) => {
  console.log('gameEvents')
  const futureGameState = store.currentGame.cells.splice(index, 1, value)
  const activePlayer = futureGameState.map((box, idx) => box === value ? idx : null).filter(box => box)
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let ended = false
  winningCombos.forEach(winningCombo => {
    const winCheck = winningCombo.map(box =>
      activePlayer.indexOf(box))
    if (winCheck.indexOf(-1) === -1) {
      ended = true
    }
  })
  api.updateGame(index, value, ended)
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

// const onBoard = (event) => {
//   // $('.box').on('click', (event) => {
//   event.preventDefault()
//   const userData = getFormFields(event.target)
//   api.board(userData)
//     .then(ui.boardSuccess)
//     .catch(ui.failure)
//   // $(event.target).append('x')
//   console.log('working?')
// }

module.exports = {
  onCreateGame,
  onUpdateGame
  // onBoard
}
