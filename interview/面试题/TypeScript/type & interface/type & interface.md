# type 和 interface 的区别

    - 都可以用于类型声明
    - type
        1. 类型别名,可以给简单数据提供类型别名
    - interface
        1. 只能用于定义对象类型
        2. ? 可选属性
        3. ; 隔开属性
        4. 具有继承的能力

## 对泛型(Generics)的理解

    - 泛型是一种允许我们使用类型变量的方式,来创建可重用的组件,核心使用类型变量
    - 类型参数化
        ```ts
        function identity<T>(arg: T): T {
            return arg;
        }

        ```
