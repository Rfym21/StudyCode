import { computed, ref } from 'vue'

const useTodos = () => {
  let title = ref('')
  let todos = ref([
    {
      title: '学习vue3', done: false
    }
  ])

  const addTodo = () => {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  const clear = () => {
    todos.value = todos.value.filter(todo => !todo.done)
  }

  let active = computed(() => {
    return todos.value.filter(todo => !todo.done).length
  })

  let all = computed(() => todos.value.length)

  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (val) {
      todos.value.forEach(todo => {
        todo.done = val
      })
    }
  })

  return {
    todos,
    title,
    allDone,
    active,
    all,
    addTodo,
    clear
  }
}

export {
  useTodos
}