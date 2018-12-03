'use strict'

const store = require('../store.js')

const createGame = () => {
  return $.ajax({
<<<<<<< HEAD
    url: 'https://aqueous-atoll-85096.herokuapp.com/games[?over=]',
=======
    url: 'https://aqueous-atoll-85096.herokuapp.com/games',
>>>>>>> master
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGame = (position, token, ended) => {
  return $.ajax({
<<<<<<< HEAD
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/:id',
=======
    url: `https://aqueous-atoll-85096.herokuapp.com/games/${store.currentGame.id}`,
>>>>>>> master
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      game: {
        cell: {
          index: position,
          value: token
        },
        over: ended
      }
    })
  })
}

// const board = (inputData) => {
//   return $.ajax({
//     url: 'https://tic-tac-toe-wdi.herokuapp.com/board',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  // board
  createGame,
  updateGame
}
