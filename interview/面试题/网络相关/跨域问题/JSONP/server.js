const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
  const query = new URL(req.url, `http://${req.headers.host}`)
  console.log(query.get('cb'))
  if (query.get('cb')) {
    const data = 'hello world'
    const result = `${cb}("${data}")`
    res.end(result)
  }
}).listen(3000)