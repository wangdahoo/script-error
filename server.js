const express = require('express')
const moment = require('moment')
let app = express()
let cdn = 'http://127.0.0.1:8080/'

let crossorigin = process.env.CROSSORIGIN
  ? 'anonymous'
  : ''

app.use(express.static('public'))

app.engine('html', require('ejs').renderFile)

app.get('/err_report', (req, res) => {
  let query = req.query
  let timestamp = moment().format('YYYY-MM-DD HH:mm:ss') 
  console.log(`[${timestamp}]\tERR_MSG=${query.err_msg}\tERR_LINE=${query.err_line}\tERR_URL=${query.err_url}`)
  res.send('ok')
})

app.get('/*', (req, res) => {
  res.render('index.html', { message: 'The Script Error', cdn, crossorigin })
})

app.listen(3000)
