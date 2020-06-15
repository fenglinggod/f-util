export const shuffle = (arr) => {
  const result = []
  let random
  while(arr.length>0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}

export function random(min, max) {
  if(arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  }
  else if(arguments.length === 1){
    return Math.floor(Math.random() * ((min + 1)))
  }
  return Math.floor(Math.random() * 9999999);
}