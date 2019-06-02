const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware')

const app = express()

app.use('/feed', proxy({
  changeOrigin: true,
  pathRewrite: (path, req) => path.replace('/feed', ''),
  target: 'http://archillect.com/'
}))
app.use(express.static(path.resolve(process.cwd(), 'src/client/')))
app.listen(8000)
