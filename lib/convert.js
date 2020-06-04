export function image2base64(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  
  const mime = img.src.substring(img.src.lastIndexOf('.')+1).toLowerCase();
  const dataUrl = canvas.toDataURL(`image/${mime}`)
  return dataUrl
}


export function url2Base64(url) {
  return new Promise((resolve, reject)=>{
    const image = new Image()
    image.onload = function() {
      const result = image2base64(image)
      resolve(result)
    }

    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin",'Anonymous');
    image.src = url;
    image.onerror = () => {
      reject(new Error('url2Base64 error'))
    }
  })
}

export function base642Blob(base64) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const unit8Array = new Uint8Array(n)

  while(n--) {
    unit8Array[n] = bstr.charCodeAt(n)
  }

  const result = new Blob([unit8Array], {type:mime})
  // const url = URL.createObjectURL(result)
  return result
}

export function blob2Base64(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      resolve(e.target.result)
    }

    fileReader.readAsDataURL(blob);
    fileReader.onerror = () => {
      reject(new Error('blob2Base64 error'));
    }
  })
}