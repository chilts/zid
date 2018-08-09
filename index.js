// --------------------------------------------------------------------------------------------------------------------

'use strict'

// npm
const mathRandom = require('math-random')

// --------------------------------------------------------------------------------------------------------------------
// setup

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')
var alphabetLength = alphabet.length

// --------------------------------------------------------------------------------------------------------------------

function id(len) {
  if ( !len ) {
    throw new Error('len must be provided')
  }
  if ( typeof len !== 'number' ) {
    throw new Error('len must be a number')
  }
  if ( len === Infinity ) {
    throw new Error('len must be less than Infinity')
  }
  if ( len < 0 ) {
    throw new Error('len must be greater than 0')
  }
  var str = ''
  while(len > 0) {
    var i = Math.floor(mathRandom() * alphabetLength)
    str += alphabet[i]
    len--
  }
  return str
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = id

// --------------------------------------------------------------------------------------------------------------------
