const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 100)
  },
  requestInfoDisplay: (req) => {
    const requestUnixTime = Date.now()
    const requestTaipeiTime = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false })
    const method = req.method
    const url = req.url
    const requestMsg = `${requestTaipeiTime} | ${method} from ${url}`
    return [requestMsg, requestUnixTime]
  },
  responseInfoDisplay: (res, requestUnixTime) => {
    const method = res.req.method
    const url = res.req.url
    const responseUnixTime = Date.now()
    const responseTaipeiTime = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false })
    const duration = responseUnixTime - requestUnixTime
    const responseMsg = `${responseTaipeiTime} | ${method} from ${url} | total time: ${duration}ms`
    return responseMsg
  }
}

module.exports = tools