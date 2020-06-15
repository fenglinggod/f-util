export const isString = (s) => {
  return Object.prototype.toString.call(s).slice(8, -1) === 'String'
}
export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}
export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}
export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}
export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
export const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}
export const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}
export const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}
export const isSymbol = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}
export const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}
export const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

const ua = navigator.userAgent.toLowerCase();
export const isWeiXin = () => {
  return ua.match(/microMessenger/i) == 'micromessenger'
}
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}
export const isChrome = () => {
  return ua.indexOf('chrome') > -1
}
export const isSafari = () => {
  return ua.indexOf('safari') > -1
}
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}
export const isIos = () => {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {  //安卓手机
      return false
  } else if (u.indexOf('iPhone') > -1) {//苹果手机
      return true
  } else if (u.indexOf('iPad') > -1) {//iPad
      return false
  } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
      return false
  } else {
      return false
  }
}
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
}
export const isElementVisibleInView = (el, partiallyVisible = false) => {
  const {top, left, bottom, right} = el.getBoundingClientRect()
  const {innerHeight, innerWidth} = window
  return partiallyVisible
  ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
  ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

export const isCardID = (sId) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      console.log('你输入的身份证长度或格式错误')
      return false
  }
  //身份证城市
  const aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
      console.log('你的身份证地区非法')
      return false
  }

  // 出生日期验证
  const sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday)
  if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
      console.log('身份证上的出生日期非法')
      return false
  }

  // 身份证号码校验
  let sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
  for (let i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
  }
  let last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
      console.log('你输入的身份证号非法')
      return false
  }

  return true
}