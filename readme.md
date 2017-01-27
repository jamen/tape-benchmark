
# tape-benchmark

> Benchmarking functions for tape

```js
// Load tape into tape-benchmark:
var test = require('tape-benchmark')(require('tape'))

test('my-test', function (t) {
  // plan and do your asserts here ...
  // then create benchmark asserts:

  t.benchmark('original', function () {
    // ...
  })

  t.benchmark('variant', { minSamples: 100 }, function () {
    // ...
  })
})
```

This module wraps [`benchmark`](https://npmjs.com/package/benchmark) into [`tape`](https://npmjs.com/tape) asserts.  So there is no setup between the two, and you get the same logging with both.

## Installation

```sh
$ npm install --save tape-benchmark
```

## Usage

### `load(tape)`

Load benchmark assertions onto tape

```js
// Load like this:
var test = require('tape-benchmark')(require('tape'))

// Or just like this:
require('tape-benchmark')(test)
```

### `t.benchmark(name, [options], fn)`

Run benchmark as an assertion.  Passes with results, or fails with an error. Use `t.bench` as a shorthand.

```js
test('my-test', function (t) {
  t.plan(2)

  t.benchmark('original', function () {
    (123).toString()
  })

  t.benchmark('binary', { minSamples: 100 }, function () {
    (123).toString(2)
  })
})
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/tape-benchmark.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/tape-benchmark/jamen.svg?style=flat-square)](https://travis-ci.org/tape-benchmark/jamen) [![downloads/month](https://img.shields.io/npm/dm/tape-benchmark.svg?style=flat-square)][package] [![downloads](https://img.shields.io/npm/dt/tape-benchmark.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/tape-benchmark.svg?style=flat-square)][package] [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
[package]: https://npmjs.com/package/tape-benchmark
