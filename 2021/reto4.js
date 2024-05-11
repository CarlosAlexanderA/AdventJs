function createXmasTree (height) {
  let result = ''
  let lines = height - 1
  const trunk = '_'.repeat(lines) + '#' + '_'.repeat(lines)
  for (let i = 0; i < height; i++) {
    result += '_'.repeat(lines) + '*'.repeat(i * 2 + 1) + '_'.repeat(lines)
    lines--
    result += '\n'
  }
  result += trunk + '\n' + trunk
  return result
}
console.log(createXmasTree(5))
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

*/

console.log(createXmasTree(3))

/*
__*__
_***_
*****
__#__
__#__
*/
