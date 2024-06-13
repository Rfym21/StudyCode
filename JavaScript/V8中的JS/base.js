Object.prototype.c = 3;

let obj = {
  a: 1,
  b: { n: 2 }
}

for (let key in obj) {
  console.log(key, obj[key])
}

console.log(obj.c)