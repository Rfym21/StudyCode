// sidebar 模块的状态
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      // 侧边栏是否折叠
      isCollapse: false
    }
  },
  // 状态属性
  actions: {
    // 状态属性的改变
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})