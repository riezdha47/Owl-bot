const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Backend aktif')
})

app.listen(3000, () => {
  console.log('Backend jalan di port 3000')
})
