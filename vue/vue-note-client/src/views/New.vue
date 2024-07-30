<template>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor theme="snow" v-model:content="state.content" placeholder="在这里输入你的笔记!" contentType="html" />
    </div>

    <div class="note-wrap">

      <div class="note-cell">
        <van-field label="标题" v-model="state.title" placeholder="请输入标题"></van-field>
      </div>

      <div class="note-cell">
        <van-field label="图片上传">
          <template #input>
            <!-- <van-uploader :after-read="afterRead" :max-count="1" v-model="state.img" accept /> -->
            <van-uploader :max-count="1" v-model="state.img" accept />
          </template>
        </van-field>
      </div>

      <div class="note-cell">

        <van-field v-model="state.note_type" is-link readonly label="分类" placeholder="选择分类"
          @click="showPicker = true" />
        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker :columns="state.noteLIst" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>

      </div>

      <div class="btn">
        <van-button type="primary" block @click="publish">保存笔记</van-button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { reactive, ref } from 'vue'
import axios from '../api/index.js'

const showPicker = ref(false)

const state = reactive({
  content: '',
  title: '',
  img: [],
  noteLIst: [
    { text: '美食', value: '美食' },
    { text: '旅行', value: '旅行' },
    { text: '工作', value: '工作' },
    { text: '恋爱', value: '恋爱' },
    { text: '学习', value: '学习' },
    { text: '吵架', value: '吵架' }
  ],
  note_type: '美食'
})

const onConfirm = (value) => {
  state.note_type = value.selectedValues[0]
  showPicker.value = false
}

const publish = async () => {
  const res = await axios.post('/publish', {
    title: state.title,
    note_content: state.content,
    note_type: state.note_type,
    head_img: state.img.length ? state.img[0].content : '',
  })
  console.log(res)
}
</script>

<style lang="less" scoped>
.note-publish {
  min-height: 100vh;

  :deep(.ql-container) {
    min-height: 200px;
  }

  .note-cell {
    border-bottom: 1px solid #d1d5db;
  }

  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
  }

}
</style>