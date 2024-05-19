function shouldBuyFidelity (times) {
  // ¡No olvides compartir tu solución en redes!
  const normalPrice = 12 * times
  const myArr = Array(times).fill(0.75).map((item, index) => 12 * (Math.pow(item, index + 1)))
  const fidelCard = 250 + myArr.reduce((acc, curr) => acc + curr, 0)
  console.log(fidelCard)
  if (fidelCard >= normalPrice) {
    return false
  }
  return true

  // const ticketPrice = 12
  // const fidelityPrice = 250
  // const fidelityDiscount = 0.75
  // const singleTickets = ticketPrice * times
  // const fidelityTickets = new Array(times)
  //   .fill(null)
  //   .map((_, idx) => ticketPrice * fidelityDiscount ** (idx + 1))
  // const fidelityTotal =
  //   fidelityPrice + fidelityTickets.reduce((acc, item) => acc + item, 0)
  // return fidelityTotal < singleTickets
}

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

shouldBuyFidelity(3)

// console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
// console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
