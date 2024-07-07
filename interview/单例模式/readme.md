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

    - cookie/localStorage 存储在浏览器,domain

## 模块化

- module是大型项目的核心
- js 早期没有模块化,script 顺序引入(阻塞)
- es6前端越来越复杂，上标准模块化
- 有import有export
- 先引入，再调用

## 单例模式
- 传统面向对象static方法
- JS Way 将instance 闭包 Storage.getInstance