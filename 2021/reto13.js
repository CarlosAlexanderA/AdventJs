function wrapGifts (gifts) {
  // ¡No olvides compartir tu solución en redes!
  if (gifts.length === 0) {
    return []
  }
  const border = '*'.repeat(gifts[0].length + 2)
  const wrappedGifts = gifts.map(gift => `*${gift}*`)
  wrappedGifts.unshift(border)
  wrappedGifts.push(border)
  return wrappedGifts
}

wrapGifts(['📷', '⚽️'])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(['🏈🎸', '🎮🧸'])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(['📷'])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
