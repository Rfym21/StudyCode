
const http = require('http')


const server = http.createServer((req, res) => {

  if (req.url === '/home') {
    res.writeHead(200, { 'content-type': 'application/json' })

    res.end('<h1>Home Page</h1>')
  } else {
    res.end('NOT FOUND')
  }

}).listen(8201, () => {
  console.log('Server is running at http://localhost:8201')
})