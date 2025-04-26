const queue = []

queue.push('蚂蚁上树')
queue.push('辣椒炒肉')
queue.push('宫保鸡丁')
queue.push('水煮鱼')

while (queue.length) {
  const top = queue[0]
  console.log(top)
  queue.shift()
}