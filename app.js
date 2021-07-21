// app.js
const express = require('express')
const app = express()
const port = 3000
//載入moment
const moment = require('moment')

app.use((req, res, next) => {
  const unixTime = Date.now()
  const timeStamp = moment(unixTime).format('YYYY-MM-DD HH:mm:ss')
  const method = req.method
  const url = req.url
  const msg = timeStamp + '|' + method + url
  console.log(msg)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})