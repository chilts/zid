// --------------------------------------------------------------------------------------------------------------------

'use strict'

// npm
const mathRandom = require('math-random')

// --------------------------------------------------------------------------------------------------------------------
// setup

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')
const alphabetLength = alphabet.length
const different = 'ABCDEFGHJKLMNPQRTUVWXYacdefghijkmnopqrstuvwxyz0123456789'.split('')
const differentLength = different.length

const defaults = {
  lookalikes: true,
}

// --------------------------------------------------------------------------------------------------------------------

function id(len, opts) {
  const o = Object.assign({}, defaults, opts || {})
  let set = o.lookalikes ? alphabet : different
  let setLength = set.length

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
  let str = ''
  while(len > 0) {
    var i = Math.floor(mathRandom() * setLength)
    str += set[i]
    len--
  }
  return str
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = id

// --------------------------------------------------------------------------------------------------------------------
