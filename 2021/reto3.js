function isValid (letter) {
  const noValid = ['[', '(', '{', ')', ']', '}']
  const firstPar = letter.indexOf('(') + 1
  const lastPar = letter.indexOf(')')
  let isValid = true
  const myGift = letter.substring(firstPar, lastPar)
  if (myGift.length === 0) {
    return false
  }
  noValid.forEach(item => {
    if (myGift.includes(item)) {
      isValid = false
    }
  })
  return isValid
}

// console.log(isValid('bici coche (balón) bici coche peluche')) // -> ✅
// console.log(isValid('(muñeca) consola bici')) // ✅

// console.log(isValid('bici coche (balón bici coche')) // -> ❌
// console.log(isValid('peluche (bici [coche) bici coche balón'))// -> ❌
// console.log(isValid('(peluche {) bici')) // -> ❌
console.log(isValid('() bici')) // ❌
