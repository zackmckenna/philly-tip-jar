const express = require('express')
const app = express()
const tipJarData = require('./tipjaruuid')

app.get('/people', (req, res) => {
  return tipJarData
})
