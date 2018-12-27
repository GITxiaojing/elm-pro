(function (doc, win) {
  let docEle = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEle.clientWidth
    if (!clientWidth) {
      return
    }
    docEle.style.fontSize = `${20 * (clientWidth / 375)}px`
  }
  if (!doc.addEventListener) {
    return
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
