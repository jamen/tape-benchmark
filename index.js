var Benchmark = require('benchmark')

module.exports = function (tape) {
  var Test = tape.Test

  // t.bench assert:
  Test.prototype.benchmark =
  Test.prototype.bench = function (name, opts, fn) {
    if (!fn) fn = opts, opts = null
    var t = this
    var bench = new Benchmark(name, fn, opts)
    bench.on('complete', function (event) {
      var target = event.target
      if (target.error) t.fail(target.error)
      else t.pass(String(target))
    }).run()
    return bench
  }

  return tape
}
