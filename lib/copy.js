const copyText2Clipboard = (value) => {
  const textArea = document.createElement('textarea')
  textArea.style.background = 'transparent'
  textArea.value = value
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('unable to copy');
  }
  document.body.removeChild(textArea);
}
export default copyText2Clipboard;