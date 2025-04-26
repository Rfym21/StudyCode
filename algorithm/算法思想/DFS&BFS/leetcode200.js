// https://leetcode.cn/problems/number-of-islands/description

const grid = [s
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let len1 = grid.length
  let len2 = grid[0].length
  let res = 0

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === "1") {
        res++
      }
    }
  }
  
}