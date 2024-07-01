# B站就地编辑
## 用户体验
    - 平时是文本状态 => 显示签名
    - mouseover 进入编辑状态,显示编辑框
    - 退出编辑状态,自动保存,显示文本状态

### 考点
    - 有开发经验,就地编辑(js高级用户体验)
    - 用类的概念来封装,复用,考虑队友
    - EditInPlace 类里的事件监听,内部this丢失 self/that = this 暂存
    - 正好利用箭头函数没有this,直接用外层this来实现对象方法调用
    - html localStorage 本地存储 getItem setItem