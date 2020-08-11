function * transverse(node) {
  yield node
  if(node.children) {
    const children = [...node.children]
    for(let i=0;i<children.length;i++) {
      yield * transverse(children[i])
    }
  }
}

function parseSelectionExpr(expr) {
  return expr.split(' ').map(x=>{
    const range = getRange(x)
    x=x.split('[').shift()
    if(x[0]==='.'){
      return {className: x.substr(1), range}
    } else {
      return {tagName: x, range}
    }
  })
}

function getRange(x) {
  const m = x.match(/\[(.*)\]/)
  if(m) {
    return (arr) => arr.slice(...m[1].split(':').map((x, i)=>x?x:(i?0:arr.length)))
  }
}

function isAncestor(node1, node2) {
  let p = node2
  do {
    if(p===node1) return true
  } while((p = node2.parentNode)) 
  return false
}

function selector(node, path) {
  if(path.length===0) return [node]
  const p = path.shift()
  let nodes = []
  if(p.className) {
    nodes = document.getElementsByClassName(p.className).filter(y=>isAncestor(node, y))
  } else if(p.tagName) {
    nodes = [...transverse(node)].filter(n=> n.tagName === p.tagName)
  }
  p.range && (nodes = p.range(nodes))
  return [].concat(...nodes.map(node=>selector(node, [...path])))
}