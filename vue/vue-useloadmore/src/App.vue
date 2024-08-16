<template>
  <section>
    <article v-for="(article, index) in articles" style="height: 20vh;text-align: left;line-height: 20vh;"
      class="article" :key="article.id" :ref="(el) => { index === articles.length - 1 ? (itemRef = el) : '' }">
      <h1>
        {{ article.id }}. {{ article.title }}
      </h1>
    </article>
  </section>
</template>

<script setup lang="ts">
import { toRefs, ref, onMounted } from 'vue';
import { useArticleStore } from './store/article'
import { useLoadMore } from './hooks/useLoadMore.ts'
const store = useArticleStore()
const { articles } = toRefs(store)
const hasMore = ref(true)
const currentPage = ref(1)
const itemRef: any = ref(null)

onMounted(async () => {
  await store.getArticles(currentPage.value, 7)
})

const handleNextPage = async (cb: any) => {
  currentPage.value++
  const res: any = await store.getArticles(currentPage.value, 7)
  if (!res.hasMore) {
    cb(false)
    hasMore.value = false
  }
}

const { setHasMore } = useLoadMore(itemRef, () => {
  handleNextPage(setHasMore)
})
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

article+article {
  border-top: 1px solid #ccc;
}
</style>
