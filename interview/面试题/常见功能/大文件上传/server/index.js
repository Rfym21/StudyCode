const http = require('http')
const path = require('path')

// 存储切片文件
const UPLOAD_DIR = path.resolve(__dirname, '.', "upload", "chunks")

const server = http.createServer((req, res) => {
  // 设置跨域
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'access-control-allow-methods': 'POST'
  })

  if (req.method === 'OPTIONS') {
    // 预检请求
    res.status = 200
    res.end()
  }

  if (req.url === '/upload' && req.method === 'POST') {
    // 接收FormData
    req.on('data', (data) => {
      console.log('data:', data)
    })

  }

  res.end('Server is running')

})

server.listen(8401, () => {
  console.log("server is running at 8401")
})
