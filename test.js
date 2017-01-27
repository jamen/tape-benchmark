var test = require('./')(require('tape'))

test('my-test', function (t) {
  t.plan(1)

  t.true(true, 'normal asserts')
})

test.skip('benchmarks', function (t) {
  t.plan(2)

  t.benchmark('original', function () {
    (123).toString()
  })

  t.benchmark('binary', { minSamples: 100 }, function () {
    (123).toString(2)
  })
})
