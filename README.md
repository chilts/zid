# zid #

[![Build Status](https://secure.travis-ci.org/chilts/zid.png?branch=master)](http://travis-ci.org/chilts/zid)

[![NPM](https://nodei.co/npm/zid.png?downloads=true)](https://nodei.co/npm/zid/)

Generate random strings made up of [A-Za-z0-9] that are also URL compatible. Only good package name of '?id' left.

You choose the length. No underscore, no dash, no slash or backslash, indeed no other chars.

## Synopsis ##

```js
var zid = require('zid')

console.log(zid(6))
// -> 'fA8ljv'

console.log(zid(12))
// -> 'vy9gDZwKJmdK'

console.log(zid(0))
// -> throws

console.log(zid(-1))
// -> throws

console.log(zid())
// -> throws

console.log(zid('hello'))
// -> throws

```

## AUTHOR ##

Written by [Andrew Chilton](https://chilts.org/):

* [Blog](https://chilts.org/)
* [Twitter](https://twitter.com/andychilton)
* [GitLab](https://gitlab.com/chilts)
* [GitHub](https://github.com/chilts) (deprecated)

# License #

MIT

(Ends)
