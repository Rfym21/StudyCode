
function Car(color, owner) {
  // this.name = 'su7'    // 降低耦合度
  // this.lang = 5000
  // this.height = 1400
  this.color = color
  this.owner = owner
}

// 建议使用
// Car.prototype.name = 'su7'
// Car.prototype.lang = 5000
// Car.prototype.height = 1400

// 不建议采用
Car.prototype = {
  name: 'su7',
  lang: 5000,
  height: 1400
}

let car1 = new Car('green', 'r')
let car2 = new Car('pink', 'f')