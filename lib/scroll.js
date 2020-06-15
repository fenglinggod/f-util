export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset: el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset: el.screenTop
})

export const scroll2Top = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scroll2Top);
    window.scrollTo(0, c - c / 8);
  }
}