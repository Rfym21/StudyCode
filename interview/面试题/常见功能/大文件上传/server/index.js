const http = require('http')
const path = require('path')
const fse = require('fs-extra')
// 处理formData的NPM包
var multiparty = require('multiparty')
const { log } = require('console')

// 存储切片文件
const UPLOAD_DIR = path.resolve(__dirname, "upload", "chunks")

const server = http.createServer(async (req, res) => {
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
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
      // console.log(fields)
      // console.log(files)
      // fields切片的描述
      // files切片的文件
      // 获取切片文件
      const file = files.file[0]
      // 获取切片文件名
      const fileName = fields.fileName[0]
      // 获取切片文件路径
      const chunkName = fields.chunkName[0]
      // 保存切片
      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
      // 检查保存切片文件夹是否有效
      if (!fse.existsSync(chunkDir)) {
        // 如果切片文件夹不存在，则创建切片文件夹
        fse.mkdirSync(chunkDir)
      }
      // 移动切片到切片文件夹
      fse.moveSync(file.path, `${chunkDir}/${chunkName}`)
      res.end(
        JSON.stringify(
          {
            code: 200,
            message: '切片上传成功!'
          }
        )
      )
    })
  }

  if (req.url === '/merge' && req.method === 'POST') {
    // 接收合并请求
    // 解析请求体
    const { fileName, size } = req.body
    // 完整文件的路径
    const filePath = path.resolve(__dirname, "upload", fileName)
    // 合并切片
    const result = await mergeFileChunk(filePath, fileName, size)
    if (result) {
      res.end(JSON.stringify({
        code: 200,
        message: '文件合并成功!'
      }))
    }
  }

  res.end('Server is running')

})

const mergeFileChunk = async (filePath, fileName, size) => {
  // 拿到所有切片所在的文件路径
  const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
  // 拿到所有的切片
  const chunkList = await fse.readdir(chunkDir)
  // 根据切片名排序
  chunkList.sort((a, b) => a.split(" - ")[1] - b.split(" - ")[1])
  const result = chunkList.map((chunkFileName) => {
    // 获取切片的完整路径
    const chunkPath = path.resolve(chunkDir, chunkFileName)
    // 合并切片(二进制文件)，创建一个可写流
    return pipeStream(chunkPath, fse.createWriteStream(filePath, {
      start: index * size,
      end: (index + 1) * size
    }))
  })

  await Promise.all(result)
  fse.rmdirSync(chunkDir)
  return true
}

const pipeStream = (path, writeStream) => {
  return new Promise((resolve, reject) => {
    // 读取切片
    const readStream = fse.createReadStream(path)
    readStream.on("end", () => {
      // 删除切片
      fse.remove(path)
      resolve()
    })
    // 将切片写入到完整文件中
    readStream.pipe(writeStream)
  })
}

server.listen(8401, () => {
  console.log("server is running at 8401")
})
