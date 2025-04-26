const arr = [2, 5, 7, 1, 2, 4]

const maxDistance = (arr) => {
  const arrLength = arr.length
  const left = getDistance(arr)
  const right = getDistance(arr.reverse()).reverse()
  let max = 0
  let maxIndex = 0

  for (let i = 0; i < arrLength; i++) {
    if (left[i] + right[i] > max) {
      max = left[i] + right[i]
      maxIndex = i
    }
  }

  return [max, maxIndex]

  function getDistance(arr) {
    const result = []
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > arr[i + 1] || i === arrLength - 1) {
        const n = result.length
        for (let j = i - n; j >= 0; j--) {
          result.push(j)
        }
      }
    }

    return result
  }

}

console.log(maxDistance(arr))
