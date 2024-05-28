function fixFiles (files) {
  // ¡No olvides compartir tu solución en redes!
  const objFiles = Object.fromEntries(files.map(key => [key, 0]))
  const result = files.map(item => {
    objFiles[item] = objFiles[item] + 1
    if (objFiles[item] > 1) {
      return `${item}(${objFiles[item] - 1})`
    }
    return item
  })
  return result
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
