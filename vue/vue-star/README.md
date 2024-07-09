# 组件定制
    - 定制一个Rate组件
    - 显示评分星星
    - 颜色主题定制
    - props(defineProps) + computed(计算属性)
    - 动态打分
    - 父子通信
        - 组件间通信的原则  数据状态及修改归父组件管理  通过 props 和自定义事件传递给子组件  子组件不可以直接修改状态  通过自定义事件传递给父组件(emits)
            发出一个请求 emits (自定义事件,参数)
        - 父组件声明自定义的事件
          @update-rate = "onRate"  自定义事件的名字  函数体
        - 子组件
            - 引入defineEmits  获取可用事件
                let emits=defineEmits(["自定义事件"])
            - emits("update-rate",2)
            - defineProps
    - 打分业务的实现
        - 组件的私有状态  width  初始值为props.value, mouseOut时恢复到props.value 状态驱动的界面  交互的分数还有宽度
        - 定位
            - 把实心星定位到空心星上面
            - 数值值满足了
            - 空空心星可交互
            - 每颗星星 @mouseOver @mouseOut @click
        