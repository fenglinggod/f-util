export function dragWithTransformListener(target, type='mouse') {
  let lastX = 0
  let lastY = 0
  const down = type==='touch'?'touchstart':'mousedown'
  const move = type==='touch'?'touchmove':'mousemove'
  const up = type==='touch'?'touchend':'mouseup'
  const strongs = type==='touch'?'touchcancel':'mouseout'
  target.addEventListener(down, (e) => {
    let {pageX, pageY} = e
    function draging(e) {
      const actionX = e.pageX - pageX
      const actionY = e.pageY - pageY
      target.style.transform = `translate(${actionX+lastX}px, ${actionY+lastY}px)`
    }
    function dragend(e) {
      target.removeEventListener(move, draging)
      lastX += e.pageX - pageX
      lastY += e.pageY - pageY
      target.removeEventListener(up, dragend)
      target.removeEventListener(strongs, dragend)
    }
    target.addEventListener(move, draging)
    target.addEventListener(up, dragend, {once: true})
    target.addEventListener(strongs, dragend, {once: true})
  })
}

