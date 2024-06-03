var mrPeng = {
  age: 18,
  sex: 'boy',
  helth: 100,
  drink: function () {
    this.helth++
    comsole.log('Drink')
  },
  smoke: function () {
    // mrPeng.helth++
    this.helth--
    console.log('Somking')
  }
}

var abc = 'name'
mrPeng[abc] = '铠甲勇士'
console.log(mrPeng)