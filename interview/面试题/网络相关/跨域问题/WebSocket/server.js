const WebSocket = require('ws')

const ws = new WebSocket.Server({ port: 3000 })
ws.on('connection', (obj) => {
  // obj 是建立连接的客户端对象
  obj.on('message', (msg) => {
    obj.send('服务器收到：' + msg)
    let count = 0
    setInterval(() => {
      obj.send('服务器发送：' + count)
      count++
    }, 1000)
  })
})