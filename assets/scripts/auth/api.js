'use strict'

const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    // development: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    // development: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = (inputData) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',
    // development: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = () => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-out',
    // development: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
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
  signUp,
  signIn,
  changePassword,
  signOut
  // board
}
