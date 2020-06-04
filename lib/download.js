import {isChrome, isSafari} from './judge'
const download = (url, name) => {
  const chrome = isChrome();
  const safari = isSafari();
  if(chrome || safari) {
    const a = document.createElement('a')
    a.href = url;
    if(a.download !== undefined) {
      const filename = name || url.substring(url.lastIndexOf('/')+1, url.length)
      a.download = filename
    }

    if(document.createEvent) {
      const e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      a.dispatchEvent(e)
      return true
    }
  }

  if(url.indexOf('?') === -1) {
    url += '?download'
  }
  window.open(url, '_self')
  return true
}
export default download;