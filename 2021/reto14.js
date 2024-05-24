function missingReindeer (ids) {
  // ¡No olvides compartir tu solución en redes!
  const orderArr = ids.sort((a, b) => a > b ? 1 : -1)
  for (let i = 0; i < orderArr.length; i++) {
    if (orderArr[i] !== i) {
      return i
    }
  }
  return orderArr[orderArr.length - 1] + 1
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
