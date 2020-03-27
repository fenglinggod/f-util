export default function before(obj, method, fn) {
  const l = arguments.length;
  let old = () => void 0
  let newFn = () => void 0
  if(l === 2) {
    old = arguments[0]
    newFn = arguments[1]
    return (...args) => {
      newFn(...args)
      old(...args)
    }
  }
  if(l === 3) {
    old = obj[method]
    newFn = fn
    obj[method] = function() {
      newFn.call(this)
      old.apply(this, arguments)
    }
  }
}

