import { ref, onMounted } from 'vue'

const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  onMounted(() => {
    // 监听鼠标移动事件
    window.addEventListener('mousemove', (e) => {
      // 更新鼠标坐标
      x.value = e.pageX
      y.value = e.pageY
    })
  })

  return {
    x,
    y
  }
}


export {
  useMouse
}