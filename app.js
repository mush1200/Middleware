// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
//載入tools
const { requestInfoDisplay, responseInfoDisplay, randomId } = require('./tools')

app.use((req, res, next) => {
  const [requestMsg, requestUnixTime] = requestInfoDisplay(req)
  console.log(requestMsg)

  res.on('finish', () => {
    const responseMsg = responseInfoDisplay(res, requestUnixTime)
    console.log(responseMsg)
  })
  next()
})
//模板引擎
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const id = randomId
  res.render('index', { id })
  // res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  const id = randomId
  res.render('index', { id })
  // res.send('新增 Todo 頁面')
})

app.post('/', (req, res) => {
  res.redirect('/')
  // res.send('新增一筆  Todo')
})

app.get('/:id', (req, res) => {
  const id = randomId
  res.render('index', { id })
  // res.send('顯示一筆 Todo')
})



app.listen(port, () => {
  console.log(`App running on port ${port}`)
})