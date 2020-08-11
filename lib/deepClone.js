const deepClone = (val,hash = new WeakMap) => {
  if(val == null) return val  //排除掉null 和 undefine 的情况
  if(typeof val !== 'object') return val  //这里包含了函数类型
  if(val instanceof RegExp) return new RegExp(val)
  if(val instanceof Date) return new Date(val)
  //......
  //拷贝的可能是一个对象, 或者是一个数组(循环) for ...in...
  let instance = new val.constructor  //根据当前属性构造一个新的实例
  if(hash.has(val)) {  //先去hash中查看一下是否存在过，如果存在就把以前拷贝的返回去
      return hash.get(val)  //返回已经拷贝的结果
  }
  hash.set(val,instance)  //没放过就放进去
  //用一个对象来记忆
  for(let key in val){  //一层
      if(val.hasOwnProperty(key)){  //讲hash继续向下传递, 保证这次拷贝能拿到以前拷贝的结果
          instance[key] = deepClone(val[key],hash)  //产生的就是一个新的拷贝后的结果
      }  //过滤掉原型链上的属性
  }
  return instance
}

function clone(obj) {
    if(obj===null || typeof obj !== 'object') return obj
    const newObj = new obj.constructor
    for(let key in Object.getOwnPropertyDescriptors(obj)) {
        newObj[key] = clone(obj[key])
    }
    return newObj
}

export function deepCompare(a, b) {
    if(a === null || typeof a !== 'object' || b === null || typeof b !== 'object') return a === b
    const propsA = Object.getOwnPropertyDescriptors(a)
    const propsB = Object.getOwnPropertyDescriptors(b)
    if(Object.keys(propsA).length !== Object.keys(propsB).length) return false
    return Object.keys(propsA).every(k=>deepCompare(a[k], b[k]))
}

export default deepClone