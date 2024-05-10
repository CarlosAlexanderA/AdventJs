function listGifts (letter) {
  const arrGifts = letter.split(' ')
  const result = {}
  arrGifts.forEach(item => {
    if (item.startsWith('_') || item === '') { return }
    let num = 1
    if (result[item.trim()]) {
      ++num
    }
    result[item] = num
  })
  return result
}

const carta = 'bici coche   balón _playstation bici   coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
