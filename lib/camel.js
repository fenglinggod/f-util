export function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

export function toCamelCase(str) {
  var pattern = /-([a-z])/g
  return str.replace(pattern,function(all,letter){
      return letter.toUpperCase();
  })
}
