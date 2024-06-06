function canMouseEat (direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀

  for (let i = 0; i < game.length; i++) {
    if (!game[i].includes('m')) {
      continue
    }
    const row = game[i].indexOf('m')
    switch (direction) {
      case 'up':
        return i > 0 && game[i - 1][row] === '*'
      case 'down':
        return i < game.length - 1 && game[i + 1][row] === '*'
      case 'right':
        return row < game[i].length - 1 && game[i][row + 1] === '*'
      case 'left':
        return row > 0 && game[i][row - 1] === '*'
      default:
        return false
    }
  }

  return false
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down', room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left', room)) // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up', room2)) // false
console.log(canMouseEat('down', room2)) // false
console.log(canMouseEat('right', room2)) // true
console.log(canMouseEat('left', room2)) // false
