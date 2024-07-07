# 设计模式中的单例模式

## 实现Storage类
    使得该类为单例,基于localStorage进行封装。实现setItem(key,value)和getItem(key)
    - 类适合封装
    - 只实例化一次
        无论new多少次,都只创建一个实例
    - es6 提供了class/extends/super/static
        适合企业级大型项目开发
    - 要创建实例,不直接使用new
    - 单例模式 static 方法来实现
    - 是否实例化? 静态属性(Class.instance) : 构造函数对象的属性 (Storage.instance = new Storage())