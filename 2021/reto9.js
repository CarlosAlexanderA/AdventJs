// * masomenos tengo idea , pero el set no me causa seguridad
function groupBy (collection, it) {
  const result = {}
  if (typeof it === 'function') {
    const algo = new Set(collection.map(item => it(item)))
    algo.forEach(key => {
      result[key] = collection.filter(item => key === it(item))
    })
  } else {
    const algo = new Set(collection.map(item => item[it]))
    algo.forEach(key => {
      result[key] = collection.filter(item => key === item[it])
    })
  }
  return result
}

// groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

// groupBy(
//   [1397639141184, 1363223700000],
//   timestamp => new Date(timestamp).getFullYear()
// )
// // { 2013: [1363223700000], 2014: [1397639141184] }

// groupBy([
//   { title: 'JavaScript: The Good Parts', rating: 8 },
//   { title: 'Aprendiendo Git', rating: 10 },
//   { title: 'Clean Code', rating: 9 }
// ], 'rating')
// // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
// //   9: [{ title: 'Clean Code', rating: 9 }],
// //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
