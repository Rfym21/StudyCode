<template>
  <div class="score">
    <header class="your_score">
      <span class="score_num">{{ score }}分</span>
      <div class="result_tip">提示语</div>
    </header>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useQuestionStore } from '../store/question.js'
const _state = reactive({
  scoreTipsArr: [
    "你说，是不是把知识都还给小学老师了？",
    "还不错，但还需要继续加油哦！",
    "不要嘚瑟还有进步的空间！",
    "智商离爆表只差一步了！",
    "你也太聪明啦，旅梦欢迎你！",
  ],
})

const { state } = useQuestionStore()

const score = computed(() => {
  let val = 0
  state.questionList.map((item, i) => {
    item.topic_answer[state.answerList[i]].is_standard_answer === 1 ? val += 20 : val
  })
  console.log(val)
  return val
})
</script>

<style lang="css" scoped></style>
<style>
body {
  background-image: url('../assets/images/4-1.jpg')
}
</style>