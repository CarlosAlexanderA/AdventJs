function decodeNumbers (symbols) {
  // ¡No olvides compartir tu solución en redes!
  const data = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }
  const arrSymbols = symbols.split('')
  // eslint-disable-next-line array-callback-return
  const total = arrSymbols.reduce((acc, curr, index, arr) => {
    for (const key in data) {
      if (curr === key) {
        // console.log(arr[index + 1])
        const nextNum = data[arr[index + 1]]
        if (data[curr] >= nextNum || nextNum === undefined) {
          // console.log(data[curr] + ' +')
          return acc + data[curr]
        } else {
          // console.log(data[curr] + ' -')
          return acc - data[curr]
        }
      }
    }
  }, 0)

  console.log(total ?? NaN)
  return total ?? NaN
}

//*  Símbolo       Valor
//*  .             1
//*  ,             5
//*  :             10
//*  ;             50
//*  !             100

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
