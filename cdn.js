const express = require('express')
const cors = require('cors')
let cdn = express()

if (process.env.CORS) {
  cdn.use(cors())
}

cdn.use(express.static('public'))

cdn.get('/*', (req, res) => {
  res.send('this is the cdn.')
})

cdn.listen(8080)
