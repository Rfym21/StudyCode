
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export const useLoadMore = (
  nodeRef: Ref<HTMLElement | null>,
  loadMore: () => void,
) => {
  let observer: IntersectionObserver | null = null
  // 是否还有更多数据
  const hasMore = ref(true)

  // 监听最后元素的改变
  watch(nodeRef, (newNodeRef, oldNodeRef) => {
    if (oldNodeRef && observer) {
      observer.unobserve(oldNodeRef)
    }

    if (newNodeRef) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          loadMore()
        }
      })
      // 当没有更多数据时，不再监听
      observer.observe(newNodeRef)
    }
  })

  watch(hasMore, (value) => {
    if (observer) {
      if (value && nodeRef.value) {
        observer.observe(nodeRef.value)
      } else {
        observer.disconnect()
      }
    }
  })

  return {
    hasMore,
    setHasMore: (value: boolean) => { hasMore.value = value }
  }
}