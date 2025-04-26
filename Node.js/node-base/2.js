// 石头剪刀布
// node 2.js rock
// 电脑自动随机出一个

let playerAction = process.argv[2]

let random = Math.random() * 3

let computerAction = ''

if (random < 1) {
  computerAction = 'rock'
} else if (random > 2) {
  computerAction = 'scissor'
} else {
  computerAction = 'paper'
}

// 比较
if (playerAction === computerAction) {
  console.log('平局')
} else if (
  (playerAction === 'rock' && computerAction === 'scissor') ||
  (playerAction === 'scissor' && computerAction === 'paper') ||
  (playerAction === 'paper' && computerAction === 'rock')
) {
  console.log('你输了')
} else {
  console.log('你赢了')
}