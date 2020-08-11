// 写一个函数,给定一个数组,判断数组中某一项,或者任意多项的和,是否被另一个整数整除。比如:
solve([3,5,8], 13) = true
solve([3,9], 15) = false
solve([7,8,2], 7) = true
solve([1,2,3], 6) = true

function solve(arr, N) {
  const s = new Set([arr.shift() % N])
  while(arr.length > 0) {
    const ak = arr.shift()
    const items = [...s]
    items.forEach(x => {
      s.add((x+ak) % N)
    })
    s.add(ak)
  }
  return s.has(0)
}