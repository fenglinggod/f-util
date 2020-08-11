function getLayout(ele) {
  let left = ele.offsetLeft, top = ele.offsetTop
  let p = ele.offsetParent
  while(p) {
    left += p.offsetLeft
    top += p.offsetTop
    p = p.offsetParent
  }

  return {
    width: ele.offsetWidth,
    height: ele.offsetHeight,
    left,
    top
  }
}

export default getLayout