import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useQuestionStore = defineStore('question', () => {
  const state = reactive({
    questionList: [],
    itemNum: 1,   // 第几题
    answerList: [], // 选中的选项
  })

  function getQuestionList() {
    axios.get("https://mock.mengxuegu.com/mock/65a7d72cb674c730aaefdcea/example/question")
      .then(res => {
        state.questionList = res.data.questions
      })
  }

  function setItemNum() {
    state.itemNum++
  }

  function setAnswerList(answer) {
    state.answerList.push(answer)
  }

  return {
    state,
    getQuestionList,
    setItemNum,
    setAnswerList
  }

})