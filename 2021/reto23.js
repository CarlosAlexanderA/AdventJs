function canReconfigure (from, to) {
  // ¡No olvides compartir tu solución en redes!
  if (from.length !== to.length) {
    return false
  }

  const mapFromTo = new Map()
  const mapToFrom = new Map()

  for (let i = 0; i < from.length; i++) {
    if (mapFromTo.has(from[i])) {
      if (mapFromTo.get(from[i]) !== to[i]) {
        return false
      }
    } else {
      mapFromTo.set(from[i], to[i])
    }

    if (mapToFrom.has(to[i])) {
      if (mapToFrom.get(to[i]) !== from[i]) {
        return false
      }
    } else {
      mapToFrom.set(to[i], from[i])
    }
  }
  return true
}

// const from = 'BAL'
// const to = 'LIB'
// const result = canReconfigure(from, to) // true
// console.log(result)
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

// const from = 'CON'
// const to = 'JUU'
// const result = canReconfigure(from, to) // false
// console.log(result)

// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */

// const from = 'XBOX'
// const to = 'XXBO'
// const result = canReconfigure(from, to) // false
// console.log(result)

// /* no se puede hacer la transformación:
// X -> X
// B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
// O -> B
// X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
// */

// const from = 'XBOX'
// const to = 'XOBX'
// const result = canReconfigure(from, to) // true
// console.log(result)

// const from = 'MMM'
// const to   = 'MID'
// cons result = canReconfigure(from, to) // false
// console.log(result)

// /* no se puede hacer la transformación:
// M -> M (BIEN, asigna el mismo carácter a si mismo)
// M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
// M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
// */

const from = 'AA'
const to = 'MID'
const result = canReconfigure(from, to) // false -> no tiene la misma longitud
console.log(result)
