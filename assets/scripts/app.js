'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/game-events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#start-game-button').on('click', gameEvents.onCreateGame)
  $('#new-game-button').on('click', gameEvents.onCreateGame)
  // $('#board').on('click', gameEvents.onUpdateGame)
  // $('#board').on('click', authEvents.onBoard)
})

let player1
const changePlayer = () => {
  const secondPlayer = player1 === 'X' ? 'O' : 'X'
  player1 = secondPlayer
  console.log(secondPlayer)
  return secondPlayer
}
$('.box').on('click', (event) => {
  changePlayer()
  $(event.target).html(player1)
  console.log($(event.target).index())
  // console.log('work?')
  gameEvents.onUpdateGame($(event.target).index(), player1)
})
//
// let currentTurn = 1
// let movesMade = 0
//
// const gameBoard = (() => {
//   let board  = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   let xBoxes = [];
//   let oBoxes = [];
// }
//
// const winningCombos = {
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// }

// const game = {
//
//       "id": 1,
//       "cells": ["o","x","o","x","o","x","o","x","o"],
//       "over": true,
//       "player1": {
//         "id": 1,
//         "email": ""
//       },
//       "player_o": {
//         "id": 3,
//         "email": ""
//       }
//     },
//     {
//        "id": 2,
//        "cells": ["","","","","","","","",""],
//        "over": false,
//        "player2": {
//          "id": 3,
//          "email": ""
//        },
//        "player_o": {
//          "id": 1,
//          "email": ""
//        }
//     }
//  }
