const http = require('http')

http.createServer(function (req, res) {
  // 开启CORS跨域
  res.writeHead(200, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE',
  })
  res.end('hello world')
}).listen(3000)