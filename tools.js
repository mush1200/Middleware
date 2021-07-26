const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 100)
  },
  requestInfoDisplay: (req) => {
    const requestUnixTime = Date.now()
    const requestTimeStamp = moment(requestUnixTime).format('YYYY-MM-DD HH:mm:ss')
    const method = req.method
    const url = req.url
    const requestMsg = `${requestTimeStamp} | ${method} from ${url}`
    return [requestMsg, requestUnixTime]
  },
  responseInfoDisplay: (res, requestUnixTime) => {
    const method = res.req.method
    const url = res.req.url
    const responseUnixTime = Date.now()
    const responseTimeStamp = moment().format('YYYY-MM-DD HH:mm:ss')
    const duration = responseUnixTime - requestUnixTime
    const responseMsg = `${responseTimeStamp} | ${method} from ${url} | total time: ${duration}ms`
    return responseMsg
  }
}

module.exports = tools