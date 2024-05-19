/* eslint-disable no-labels */
function getMinJump (obstacles) {
  // ¡No olvides compartir tu solución en redes!
  const maxNum = Math.max(...obstacles)
  const myArr = Array.from({ length: maxNum + 1 }, (_, i) => i)
  let jumps
  startLopp: for (let i = 1; i <= myArr.length; i++) {
    for (let j = i; j <= myArr.length; j += i) {
      if (obstacles.includes(myArr[j])) {
        break
      }
      if (j + i >= myArr.length) {
        jumps = i
        break startLopp
      }
    }
  }
  return jumps
}

// const obstacles1 = [5, 3, 6, 7, 9]
// getMinJump(obstacles1) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  .
S-----------S-----------S-------
*/

const obstacles2 = [2, 4, 6, 8, 10]
getMinJump(obstacles2) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X
S--------------------S---------

//* Longitudes de salto:
//* 1 caería en el 2
//* 2 caería en el 2
//* 3 caería en el 6
//* 4 caería en el 4
//* 5 caería en el 10
//* 6 caería en el 6
//* 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
