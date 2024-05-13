function getIndexsForPalindrome (word) {
  const isPal = (word) => word === word.split('').reverse().join('')
  if (isPal(word)) {
    return []
  }
  const arrWord = word.split('')
  for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < arrWord.length; j++) {
      if (i === j) continue

      const copyMyWord = [].concat(arrWord)

      const firstLetter = arrWord[i]

      const secondLetter = arrWord[j]

      copyMyWord[i] = secondLetter
      copyMyWord[j] = firstLetter
      if (isPal(copyMyWord.join(''))) {
        return [i, j]
      }
    }
  }
  return null
}

console.log(getIndexsForPalindrome('anna'))
getIndexsForPalindrome('anna') // []
// getIndexsForPalindrome('abab') // [0, 1]
// getIndexsForPalindrome('abac') // null
// getIndexsForPalindrome('aaaaaaaa') // []
// getIndexsForPalindrome('aaababa') // [1, 3]
// getIndexsForPalindrome('caababa') // null
