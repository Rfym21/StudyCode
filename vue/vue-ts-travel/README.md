# 大厂项目技能点分析

- vue全家桶 => (router / pinia)

- TypeScript =>
      1. ts是js的超集
      2. ts在js上添加了自定义类型定义
      3. ts具有静态编译的能力
      4. 在路由配置中添加 RouterRecordRaw类型 约束
      5. type声明约束 => :规则 / ref<规则>()
      6. type声明方式 => export type 规则名 ={ 变量名:类型; }
      7. 使用interface声明接口

- 使用技能点 => hooks useRouter

- hooks => 手写自定义一个hook

- 组件化 => 高质量的自定义组件(注意细节方面)
- CSS能力 => TailwindCSS + less 渲染页面
      1. 使用 tailwindCSS
      2. 使用CSS实现渐变代替图片渐变
      3. 弹性布局 => 弹性布局几要素
      4. tailwindCSS 中的@apply进阶功能
          - @apply 可以把一堆的类名交给一个类
          - 放置在一个common.css文件实现复用

- HTML能力 =>
      1. 语义化标签
          main
      2. localStorage
      3. observer

- JS技能 =>
      1. ES6 module
      2. import from + export / export default
      3. import * as R
      4. R,{a,b} from ''
      5. import type R

- 数据管理 => pinia
      1. pinia 用到的状态都要自定义类型进行约束
      2. 创建type目录作为类型定义的专属仓库,使其按模块声明类型

- 工程化 => vite
      1. 先编译在运行
      2. 开发时使用ts,编译后成为js运行
      3. alias配置(@ => /src) => path.resolve(__dirname, "./src")
      4. TypeScript项目中安装 @types/node (node的类型文件)
      5. vant自动加载 => 借助vite工程化 unplugin-vue-components插件 @vant/auto-import-resolver 将vant的加载放在vite启动阶段

- Vue 语法
      1. 插槽
      2. toRefs
          - pinia 解构多个响应式共享状态的时候
          - 将 store 变成组件方便解构的响应式对象
          - 当一个响应式对象被直接解构时,直接将值解构,导致属性丢失响应式
          - toRefs 可以将响应对象解构成多个独立的响应式引用对象
      3. watch
      4. 懒加载
      5. 防抖节流
      6. keep active
          - vue性能优化的语句
          - 原因 => router-view 路由的切换,组件会重新渲染
          - 解决 => 不卸载页面,只做切换
          - 实现 => v-slot插槽指令,指定内部的slot部分为渲染组件
          - keep-alive 全局组件,缓存组件 => 性能优化
          - include route-name数组 route.meta.cache | route.meta.keepAlive
          - KeepAlive = computed(()=>useRouter().allRoutes.filter.map)

- 性能优化
      1. 路由懒加载
      2. gradient
      3. vite vant
      4. keep-alive
