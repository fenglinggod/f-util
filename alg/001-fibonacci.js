function fibonacci(n) {
  let [a, b] = [0, 1]
  for(let i=0;i<n;i++) {
    [a, b] = [b, a+b]
  }
  return b
}
function fibonacci(n) {
  return Array(n).fill().reduce(([a,b],_)=> [b, a+b], [0,1])[1]
}

function * fibonacci3() {
  let a =1, b=1
  yield a
  yield b
  while(true) {
    const t = b
    b = a+b
    a = t
    yield b
  }
}
const it = fibonacci3()
const feb10 = Array.from(Array(10), it.next, it).map(x=>x.value)