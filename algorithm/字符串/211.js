var WordDictionary = function () {
  this.words = []
};


WordDictionary.prototype.addWord = function (word) {
  this.words.push(word)
};


WordDictionary.prototype.search = function (word) {

  if (this.words.length == 0) {
    return false
  }

  if (!word.includes('.')) {
    return this.words.includes(word)
  }

  const res = new RegExp(word)
  return this.words.some(function (item) {
    if (item.length == word.length) {
      return res.test(item)
    } else {
      return false
    }

  })

}

let w = new WordDictionary()
w.addWord('hello')
w.addWord('world')
console.log(w.search('hello'));
console.log(w.search('.orld'));
console.log(w.search('abc'));


// WordDictionary.prototype.search = function (word) {

//   let len = this.worlds.length
//   let worlds = this.worlds
//   let wordLen = word.length
//   if (!this.worlds.push(word)) {
//     for (let i = 0; i < len; i++) {

//       for (let j = 0; j < worlds[i].length; j++) {

//         if (wordLen != worlds[i].length || (word[j] != worlds[i][j] && word != '.')) {
//           break
//         }
//         if (j == wordLen - 1) {
//           return true
//         }
//       }
//     }
//   } else {
//     return true
//   }
//   return false
// };