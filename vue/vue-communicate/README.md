在面试中，你可以这样表达Vue3组件通信方式：

## 1. 父传子 - Props传值
**表达方式：**
"父组件向子组件传递数据，通过props实现。父组件在子组件标签上绑定属性，子组件使用`defineProps`接收。这是最基础的单向数据流通信方式。"

**举例：**
```vue
<!-- 父组件 -->
<ChildComponent :message="parentData" />

<!-- 子组件 -->
<script setup>
const props = defineProps(['message'])
</script>
```

## 2. 子传父 - 自定义事件
**表达方式：**
"子组件向父组件传递数据，通过自定义事件实现。子组件使用`defineEmits`定义事件，通过`emit`触发事件并传递数据，父组件监听该事件获取数据。"

**举例：**
```vue
<!-- 子组件 -->
<script setup>
const emit = defineEmits(['update-data'])
const sendData = () => emit('update-data', childData)
</script>

<!-- 父组件 -->
<ChildComponent @update-data="handleUpdate" />
```

## 3. 双向绑定 - v-model
**表达方式：**
"实现父子组件数据双向同步，父组件使用`v-model`绑定数据，子组件通过触发`update:modelValue`事件来更新父组件数据。这是v-model的底层实现原理。"

## 4. 模板引用 - ref + defineExpose
**表达方式：**
"父组件需要直接访问子组件的数据或方法时，可以通过模板引用实现。子组件使用`defineExpose`暴露需要被访问的数据，父组件通过`ref`获取子组件实例。"

## 5. 跨层级通信 - provide/inject
**表达方式：**
"用于祖先组件向后代组件传递数据，避免props逐层传递。祖先组件使用`provide`提供数据，后代组件使用`inject`注入数据，支持跨多层级通信。"

## 面试加分点：
1. **强调适用场景**：每种方式都有最佳使用场景
2. **提及响应式**：provide/inject的数据可以是响应式的
3. **对比Vue2**：可以简单对比Vue2的实现方式差异
4. **补充其他方式**：如果合适，可以提及Pinia、事件总线等状态管理方案

这样表达既显示了技术理解，又体现了实际应用能力。