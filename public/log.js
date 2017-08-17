var ERR_REPORT_URL = 'http://127.0.0.1:3000/err_report'

function makeErrReportUrl (eMsg, eUrl, eLine, ePayload) {
  var url = encodeURIComponent(location.href)
  var err_msg = encodeURIComponent(eMsg)
  var err_url = encodeURIComponent(eUrl)
  var err_line = encodeURIComponent(eLine)
  var payload = encodeURIComponent(ePayload)

  return ERR_REPORT_URL + '?url=' + url +
    '&err_msg=' + err_msg + '&err_url=' + err_url + '&err_line=' + err_line +
    '&payload=' + payload + '&rnd=' + (new Date()).getTime()
}

window.onerror = function (eMsg, eUrl, eLine) {
  var payload = {
    message: 'I\'m the error!'
  }

  var url = makeErrReportUrl(eMsg, eUrl, eLine, JSON.stringify(payload))
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.send()
}

a.b = 1
