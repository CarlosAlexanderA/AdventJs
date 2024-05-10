function contarOvejas (ovejas) {
  const withNyA = word => {
    const myletter = word.toLowerCase()
    return myletter.includes('n') && myletter.includes('a')
  }
  return ovejas.filter((item) => item.color === 'rojo' && withNyA(item.name))
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
