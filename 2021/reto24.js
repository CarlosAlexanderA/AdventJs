function checkIsSameTree (treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  const countDecorations = (bigTree) => {
    if (bigTree === null) return

    const left = countDecorations(bigTree.left) ?? 0
    const right = countDecorations(bigTree.right) ?? 0

    return bigTree.value + left + right
  }

  if (countDecorations(treeA) === countDecorations(treeB)) {
    return true
  }
  return false
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
