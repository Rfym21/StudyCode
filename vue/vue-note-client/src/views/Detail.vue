<template>

  <div class="note-detail">

    <div class="note-img"><img :src="note.head_img" alt=""></div>

    <div class="note-content">

      <div class="tab">
        <span class="note_type">{{ note.note_type }}</span>
        <span class="author">{{ note.nickname }}</span>
      </div>

      <div class="title">{{ note.title }}</div>

      <div class="content" v-html="note.note_content"></div>

    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'
import axios from '../api/index.js'

const route = useRoute()
const { id, title } = route.query
const note = ref({})

onMounted(async () => {
  // 发送请求
  const res = await axios.get('/findNoteById', {
    params: {
      id
    }
  })
  res.code === 800 && (note.value = res.data)
  nextTick(() => {
    document.title = title + " - 笔记详情"
  })
})

</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>