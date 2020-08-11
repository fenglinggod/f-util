function perm(A){
  if(A.length === 1) return [A]
  return [].concat(...A.map((a,i)=>
    perm(
      A.slice(0,i).concat(A.slice(i+1))
    ).map(p=>[a].concat(p))
    )
    )
}

function * perm(A, N) {
  if(!N) {N = A.length}
  if(N===1) {yield A.slice(); return}
  for(let i=0; i<N; i++) {
    console.log(strpad(' ', (3-N) * 4) + 'begin', A, N)
    swap(A, i, N-1)
    yield * perm(A, N-1)
    swap(A, i, N-1)
    console.log(strpad(' ', (3-N) * 4) + 'end', A, N)
  }
}

function strpad(c, n) {
  return Array(n).fill().map(x=>c).join('')
}


function * perm(A, N) {
  if(!N) {N = A.length}
  if(N===1) {yield A.slice(); return}
  for(let i=0; i<N; i++) {
    yield * perm(A, N-1)
    if(N % 2 === 1) {
      swap(A, i, N-1)
    } else {
      swap(A, 0, N-1)
    }
  }
}
