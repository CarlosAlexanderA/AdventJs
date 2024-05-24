function checkSledJump (heights) {
  // ¡No olvides compartir tu solución en redes!
  const maxNum = heights.indexOf(Math.max(...heights))
  const isAsc = heights.slice(0, maxNum).every((item, index) => item < heights[index + 1])

  const isDesc = heights.slice(maxNum).every((item, index) => {
    // console.log(heights[index + maxNum + 1] ?? item - 1)
    // console.log(heights[index + maxNum + 1] !== undefined ? heights[index + maxNum + 1] : item - 1)
    return item > (heights[index + maxNum + 1] !== undefined ? heights[index + maxNum + 1] : item - 1)
  })

  // console.log(isDesc)
  // for (let i = 0; i < maxNum; i++) {
  //   const element = heights[i]
  // }
  console.log(isAsc && isDesc)
  return isAsc && isDesc
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
