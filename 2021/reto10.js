function getCoins (change) {
  // ¡No olvides compartir tu solución en redes!

  const coins = [1, 2, 5, 10, 20, 50]
  let i = coins.length - 1
  const result = Array(i + 1).fill(0)
  let newChange = change
  while (true) {
    if (coins[i] <= newChange) {
      result[i] += 1
      newChange -= coins[i]
    } else {
      i--
    }
    if (i < 0) {
      break
    }
  }
  return result
}

//* coins[0] = 1 céntimo
//* coins[1] = 2 céntimos
//* coins[2] = 5 céntimos
//* coins[3] = 10 céntimos
//* coins[4] = 20 céntimos
//* coins[5] = 50 céntimos

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
// console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
// console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
