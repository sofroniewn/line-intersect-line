var math = require('mathjs')
var raytoline = require('ray-to-line')

module.exports = function (lineA, lineB) {
  var shifted = [lineA[1][0] - lineA[0][0], lineA[1][1] - lineA[0][1]]
  var angle = math.atan2(shifted[1], shifted[0])*180/math.pi
  var result = raytoline(lineA[0], angle, lineB)

  if (result) if (result.distance <= math.norm(shifted)) return result
  return false
}