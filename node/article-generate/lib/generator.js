
const { randomInt, createRandomPicker } = require("./random.js")
// 生成文章
function generate(title, { corpus, min = 1000, max = 2000 }) {
  // 文章长度
  const articleLength = randomInt(min, max)
  // 拿到资料库并解构数据 
  const { famous, bosh_before, bosh, conclude, said } = corpus
  // 生成随机选择器
  const [pickFamous, pickBosh_before, pickBosh, pickConclude, pickSaid] = [famous, bosh_before, bosh, conclude, said].map((arr) => createRandomPicker(arr))
  // 文章段落内容
  const article = []
  // 文章长度计算
  let totalLength = 0

  // 生成文章
  while (totalLength < articleLength) {
    let section = ''
    const sectionLength = randomInt(100, 500)
    while (section.length < sectionLength) {
      const n = randomInt(0, 100)
      if (n < 20) {
        // 生成名言
        section += sentence(pickFamous, { said: pickSaid, conclude: pickConclude })
      }
      else if (n < 50) {
        // 前置生成废话
        section += sentence(pickBosh_before, { title }) + sentence(pickBosh, { title })
      }
      else {
        // 生成废话
        section += sentence(pickBosh, { title })
      }
    }
    // 将文字添加到文章中, 并计算文章长度
    totalLength += section.length
    article.push(section)
  }
  return article
}

// 文本替换 
function sentence(pick, replacer) {
  let res = pick()
  for (key in replacer) {
    res = res.replace(new RegExp(`{{${key}}}`, 'g'), typeof replacer[key] === 'function' ? replacer[key]() : replacer[key])
  }
  return res
}

module.exports = {
  generate,
  sentence
}