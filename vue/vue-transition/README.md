# vue 动画

- 页面动态效果
    - transition css属性的切换
    - animation 复杂
    - js style + requestAnimation
    - v-if / v-show

- vue 提供了一些内置组件，比如Transition
- <component :is="">

- 养成良好的编程风格
    - BEM
    - 组件的思维
    - 优质的html / css代码
    - @import 将css模块化
        - app.css
        - card.css
    - 动态效果
      - css transition 切换类名实现
      - css animation
      - 如果要更细致的定制效果，一些内置的类似生命周期的钩子函数类名
          vue提供了Transition 类名
          v-if / v-show 切换组件/html片段的效果,动画,内置组件Transition更好的服务于动画定制
          .v-enter-from(开始) / .v-enter-active(立即激活) / .v-enter-to(动画期类名)
          .v-leave-from(开始) / .v-leave-active(立即激活) / .v-leave-to(动画期类名)
      - 加name属性进行模块化
      - animation 只需要定制enter-active-class 和leave-active-class
      - animation.css
          - transition 支持class 特性 animate__tada
          enter-active-class leave-active-class