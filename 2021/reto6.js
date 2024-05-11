function sumPairs (numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  const digits = []
  for (let i = 0; i < 6; i++) {
    const newArr = numbers.slice(i + 1)
    // console.log(newArr)
    for (let j = 0; j < newArr.length; j++) {
      const sum = numbers[i] + newArr[j] === result
      if (sum) {
        digits.push(numbers[i], newArr[j])
        return digits
      }
    }
  }

  return null
}

console.log(sumPairs([3, 5, 7, 2], 10))// [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10))// null
console.log(sumPairs([2, 2, 3, 1], 4))// [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8))// [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))// [1, 5]
