const fs = require('fs')
const path = require('path')
const moment = require('moment')

function loadCorpus(src) {
  const corpusPath = path.resolve(__dirname, '..', src)
  try {
    const corpus = JSON.parse(fs.readFileSync(corpusPath, 'utf-8'))
    return corpus;
  } catch (error) {
    console.error(`加载语料库失败: ${src}: ${error.message}`)
    return null
  }
}

function SaveCorpus(title, article) {
  const outputPath = path.resolve(__dirname, '..', 'output')
  const time = moment().format('YYYY-MM-DD-HH-mm-ss')
  const filePath = path.resolve(outputPath, `${title} ${time}.txt`)
  const text = `${title}\n\n\n${article.join('\n\n\n')}`

  try {
    // 确保目录存在
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true })
    }

    fs.writeFileSync(filePath, text)
    console.log(`文章已保存至: ${filePath}`)
  } catch (error) {
    console.error(`未能保存语料库: ${error.message}`)
  }
}

module.exports = {
  loadCorpus,
  SaveCorpus
}