<template>
  <table>
    <thead>
      <th>序号</th>
      <th>书籍名称</th>
      <th>出版日期</th>
      <th>价格</th>
      <th>购买数量</th>
      <th>操作</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in  data " :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.price }}</td>
        <td style="width: 100px;">
          <button @click="changeMinus(item)" :disabled="item.count <= 1">-</button>
          <span class="counter" style="display:inline-block;width:40px;">{{ item.count }}</span>
          <button @click="changeAdd(item)">+</button>
        </td>
        <td>
          <button @click="data.splice(index, 1)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>总价: {{ total }}</h2>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
const data = reactive([
  {
    id: 1,
    name: '《算法导论》',
    date: '2006-9',
    price: 85.00,
    count: 1
  },
  {
    id: 2,
    name: '《UNIX编程艺术》',
    date: '2006-2',
    price: 59.00,
    count: 1
  },
  {
    id: 3,
    name: '《编程珠玑》',
    date: '2008-10',
    price: 39.00,
    count: 1
  },
  {
    id: 4,
    name: '《代码大全》',
    date: '2006-3',
    price: 128.00,
    count: 1
  },
])

const total = ref(0)

watch(data, () => {
  // reduce() 方法对数组中的每个元素执行一个由您提供的函数(升序执行)，将其结果汇总为单个返回值
  total.value = data.reduce((prev, item) => {
    return prev + item.price * item.count
  }, 0)
},
  // watch第三个参数deep为true时，监听对象内部属性的变化
  { immediate: true, deep: true })

const changeMinus = (item) => {
  if (item.count > 1) {
    item.count--
  }
}

const changeAdd = (item) => {
  item.count++
}

</script>

<style lang="css" scoped>
table {
  margin: 0 auto;
  width: 800px;
  border: 1px solid #aaa;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 16px;
  border: 1px solid #aaa;
}

.counter {
  margin: 0 5px;
}
</style>