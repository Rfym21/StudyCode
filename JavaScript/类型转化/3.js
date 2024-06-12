if ({}) {
  console.log('ok');
}

// 1. Number({})
// 2. let primitive = ToPrimitive({},Number)

console.log(Number({}))

// '[object Object]'
// toNumber('[object Object]') => NaN 

console.log(Number([]))
// ToNumber([])
// ToPrimitive([],Number)   => ''
// ToNumber('') => 0

console.log(String({}))
// ToString
// toPrimitive({},String) => '[object Object]'
// toString('[object Object]') => '[object Object]'