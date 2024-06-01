function pangram (letter) {
  // ¡No olvides compartir tu solución en redes!
  const normalizeString = letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  if (!letter.includes('ñ')) {
    return false
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (!normalizeString.includes(alphabet[i])) {
      return false
    }
  }

  return true
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
