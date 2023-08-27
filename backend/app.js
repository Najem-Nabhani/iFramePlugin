const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Got request from domain: ', req.headers.referer);
  res.sendFile(__dirname + '/content.html')
})

app.get('/ok', (req, res) => {
  console.log('I got this!');
  res.send('whatever boy');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
