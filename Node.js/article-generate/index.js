
const { generate } = require('./lib/generator')
const { createRandomPicker } = require('./lib/random')
const { loadCorpus, SaveCorpus } = require('./lib/corpus')



let article = []
function handle() {
  const corpus = loadCorpus('corpus/data.json')
  if (corpus) {
    const title = createRandomPicker(corpus.title)()
    article.push(...generate(title, { corpus }))
    SaveCorpus(title, article)
  }
}

module.exports = {
  handle,
  article
}