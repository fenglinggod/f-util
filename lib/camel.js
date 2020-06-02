function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

export default styleHyphenFormat;