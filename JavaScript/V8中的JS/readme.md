# 拷贝
- 通常只讨论在引用类型上

# 浅拷贝
- 拷贝后的对象受原对象的影响
#浅拷贝
拷贝后的对象受原对象的影响
1. Object.create(obj)
2. Object.assign({}，obj)
3. [].concat(arr)
4. 数组结构 [...arr]
5. arr.slice(0)
6. arr.toReverse().reverse()

- shallowCopy原理：
1. for..in遍历原对象上的属性
2. 借助hasOwnProperty规避原对象隐式具有的属性

# 深拷贝
拷贝后的对象不受原对象的影响

- JSON.parse(JSON.stringify(obj))
1. 无法识别bigInt类型
2. 无法拷贝 undefined，function，Symbol
3. 无法处理循环引用

- structuredClone(obj)
- deepCopy原理

# 深拷贝
- 拷贝后的对象不受原对象的影响