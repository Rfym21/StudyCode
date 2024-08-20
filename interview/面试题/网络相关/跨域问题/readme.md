# 跨域

## 跨域是什么

- 跨域是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制。

## 怎么会触发跨域

- URL: <https://127.0.0.1:3000/index.html>
- 同源: => 协议(http/https) + 域名 + 端口

## 怎么解决跨域问题

## JSONP

1. 前端借助script标签的src属性不受同源策略的限制的特点
2. 携带参数callback向后端发送请求
3. 在window全局添加callback函数体
4. 后端收到请求后,向前端返回callback函数体
5. 前端接收到后端返回的数据后,执行callback函数体

### 缺点

1. 只支持GET请求
2. 需要后端配合

## CORS

- 通过在响应头中加入一些额外的的字段来告诉浏览器,允许跨域请求
    1. access-control-allow-origin: *
    2. access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS

## WebSocket协议

- WebSocket是一种网络通信协议,不受同源策略的限制

## postMessage

- 主要用于父级页面使用postMessage方法向使用iframe的子页面发送消息

## document.domain

## nginx反向代理

- 服务器安装nginx,配置反向代理
- 配置文件
    1. listen: 监听端口
    2. server_name: 域名
    3. location: 代理路径
        - proxy_pass: 代理地址

    ```nginx
    server {
        listen 80;
        server_name www.a.com;
        location / {
            proxy_pass http://www.b.com;
        }
    }
    ```
