export const color2RGB = (val, opa) => {
  const pattern = /^(#?)[a-fA-F0-9]{6}$/
  const isOpa = typeof opa == 'number'

  if (!pattern.test(val)) {
    return 
  }
  let v = val.replace(/#/, '')
  const rgbArr = []
  let rgbStr = ''

  for (let i = 0; i < 3; i++) {
    const item = v.substring(i * 2, i * 2 + 2);
    const num = parseInt(item, 16);
    rgbArr.push(num)
  }

  rgbStr = rgbArr.join();
  rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
  return rgbStr;
}
