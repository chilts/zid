// --------------------------------------------------------------------------------------------------------------------

'use strict'

// --------------------------------------------------------------------------------------------------------------------
// setup

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')
var alphabetLength = alphabet.length

// --------------------------------------------------------------------------------------------------------------------

function id(len) {
  if ( !len ) {
    throw new Error('len must be provided')
  }
  if ( len < 0 ) {
    throw new Error('len must be greater than 0')
  }
  var str = ''
  while(len > 0) {
    var i = Math.floor(Math.random() * alphabetLength)
    str += alphabet[i]
    len--
  }
  return str
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = id

// --------------------------------------------------------------------------------------------------------------------
