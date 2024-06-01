# new的过程做了什么
    - 先创建一个空对象{}
    - 构造函数(constructor)，以new的方式运行
        this指向实例，运行的过程就是实例逐渐添加属性的过程
    - 默认返回对象
    - 对象.__proto__Duck.prototype


    function myNew(Fun, ...args) {
    // 1.在内存中创建一个新对象
    let obj = {};
    
    // 2.把新对象的原型指针指向构造函数的原型属性
    obj.__proto__ = Fun.prototype;
    
    // 3.改变this指向，并且执行构造函数内部的代码（传参）
    let res = Fun.apply(obj, args);
    
    // 4.判断函数执行结果的类型
    if (res instanceof Object) {
        return res;
    } else {
        return obj;
    }
}

- js强大的表现力,对象字面量就能高定
- 一些对象,有共同的行为(每个对象都有自己的函数开销太大)--->创建类
- 每个对象肯定要有自己的属性,而且是不一样的 constructor(构造函数) new Duck()
    this被指定{}(空对象)
- 方法放到prototype原型对象上,被所有的实例共享的方法
- obj.__proto__=Duck.prototype  如果自身没有,就到原型对象上去找
- js面向对象不是传统的面向对象,Duck 构造函数,没有血缘关系
- 方法是共享的,性能更好,__proto__原型对象来查找

- 掘金
    99%用不到注册,登录注册的弹窗是不实例化的,网站会更快
    当你点击时实例化一次,再点击其他地方时不再实例化 (display: none / block)控制显示
    