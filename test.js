// --------------------------------------------------------------------------------------------------------------------

'use strict'

// npm
var test = require('tape')

// local
var zid = require('./')

// --------------------------------------------------------------------------------------------------------------------

test('test lengths', function(t) {
  t.plan(12)
  var id
  for(var i = 1; i <= 12; i++) {
    id = zid(i)
    t.equal(id.length, i, 'Test length of id is ' + i)
  }
  t.end()
})

test('test contents', function(t) {
  t.plan(12)
  var id
  for(var i = 1; i <= 12; i++) {
    id = zid(i)
    t.ok(id.match(/^[A-Za-z0-9]+$/), 'Test contents')
  }
  t.end()
})

test('test throw', function(t) {
  t.plan(3)

  try {
    zid()
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with no input')
  }

  try {
    zid(0)
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with zero')
  }

  try {
    zid(-1)
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with negative numbers')
  }

  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
