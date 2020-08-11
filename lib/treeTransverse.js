function treeTransverse(tree, ord=0) {
  let transversed = false
  if(!tree.children) {
    callback(tree.v)
    return
  }

  tree.children.forEach((child, i) => {
    if(i === ord) {
      transversed = true
      callback(tree.v)
    }
    treeTransverse(child, ord, callback)
  });
  !transversed && callback(tree.v)
}

function * treeTransverse2(tree, ord=0) {
  let transversed = false
  if(!tree.children) {
    yield tree
    return
  }
  for(let i=0;i<tree.children.length;i++) {
    if(i === ord) {
      transversed = true
      yield tree
    }
    yield * treeTransverse(tree.children[i], ord)
  }

  if(!transversed) yield tree
}

function find (tree, prediction) {
  return [...treeTransverse2(tree)].find(prediction)
}

function find (tree, prediction) {
  for(let node of treeTransverse2(tree)) {
    if(prediction(node)) {return node}
  }
}

export default treeTransverse