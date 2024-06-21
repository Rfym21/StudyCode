
const items = [1, 2, 3]
let sum = 0

items.forEach(function (item) {

  sum += item
})

for (let i of items) {
  sum += i
}
console.log(sum)
console.log(items.reduce((sum, item) => sum + item, 0))