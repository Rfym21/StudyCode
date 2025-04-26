const http = require('http')

const fs = require('fs')

/* 
* req: 前端请求对象
* res: 后端响应对象
*/
http.createServer((req, res) => {
  console.log(req.url)

  // 向前端返回数据
  if (req.url === '/index') {
    // res.end('Hello World')
    const content = fs.readFileSync('./index.html', { encoding: 'utf-8' })
    res.end(content)
  }

}).listen(3000)