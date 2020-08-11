function isPrime(n) {
  if(n<=1) return false
  const N = Math.floor(Math.sqrt(n))
  let is_prime = true

  for(let i=2;i<=N; i++) {
    if(n%i === 0) {
      is_prime = false
      break
    }
  }
  return is_prime
}

function * sievePrime(n) {
  const numbers = Array.from({length: n-2}, (_,i)=>i+2)
  let p
  while((p = numbers.shift())) {
    yield p
    numbers = numbers.filter(t=>t%p!==0)
  }
}
console.log([...sievePrime(100)])
for(let prime of sievePrime(100)) {
  console.log(prime)
}

const it = sievePrime(100)
let v = null
while(!(v=it.next()).done) {
  console.log(v)
}