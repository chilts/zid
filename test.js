// --------------------------------------------------------------------------------------------------------------------

'use strict'

// npm
var test = require('tape')

// local
var zid = require('./')

// --------------------------------------------------------------------------------------------------------------------
// setup

const lookalikeRegex = /[OISZbl]/

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
  t.plan(6)

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

  try {
    zid(NaN)
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with zero')
  }

  try {
    zid(Infinity)
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with zero')
  }

  try {
    zid('hello')
    t.fail('Should have thrown')
  }
  catch(err) {
    t.ok('Yes, this throws', 'Throws with negative numbers')
  }

  t.end()
})

test('test lookalikes: false', function(t) {
  t.plan(1)
  for(let i = 1; i <= 1000; i++) {
    const id = zid(12, { lookalikes: false })
    if (lookalikeRegex.test(id)) {
      t.fail(`Test lookalikes=false doesn't have invalid chars: ${id}`)
      t.end()
      return
    }
  }
  t.pass('No invalid chars found')
  t.end()
})

test('test lookalikes: true', function(t) {
  t.plan(1)
  let count = 0
  for(let i = 1; i <= 1000; i++) {
    const id = zid(12, { lookalikes: true })
    if (lookalikeRegex.test(id)) {
      count = count + 1
    }
  }

  // check we found at least one id with an invalid char as expected
  if ( count === 0 ) {
    t.fail("We expect to find at least one invalid char in 1,000 tests!")
  }
  else {
    t.pass(`We did have at least one id with an invalid char, as expected (count=${count}).`)
  }
  t.end()
})

test('test no options', function(t) {
  t.plan(1)
  let count = 0
  for(let i = 1; i <= 1000; i++) {
    const id = zid(12, { /* lookalikes: true */ })
    if (lookalikeRegex.test(id)) {
      count = count + 1
    }
  }

  // check we found at least one id with an invalid char as expected
  if ( count === 0 ) {
    t.fail("We expect to find at least one invalid char in 1,000 tests!")
  }
  else {
    t.pass(`We did have at least one id with an invalid char, as expected (count=${count}).`)
  }
  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
