var assert = require('assert')

var linetoline = require('../index.js')

function close(x, y) {
  return (x - y) < .01 & (x - y) > -.01 
}

function check(x, y) {
  assert.equal(close(x[0], y[0]), true)
  assert.equal(close(x[1], y[1]), true)
}

lineA = [[0, 0], [0, 1]]
lineB = [[-1, 0.5], [1, 0.5]]
result = linetoline(lineA, lineB)
console.log(result)
check(result.point, [0, 0.5])


lineA = [[0, -10], [0, 1]]
lineB = [[-1, 0.5], [1, 0.5]]
result = linetoline(lineA, lineB)
console.log(result)
check(result.point, [0, 0.5])
