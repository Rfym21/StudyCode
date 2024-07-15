<template>
  <div class="page">
    <div class="card">

      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>

      <div class="card__content">
        <!-- <div :class="['emoji', { pulse: !isActive }]">🐻</div> -->
        <!-- <Transition name="pulse">
          <div v-if="isActive" class="emoji">🐻</div>
        </Transition> -->

        <Transition
        class="animate__tada"
        enter-active-class="animate__animated animate__infinite"
        leave-active-class="animate__animated animate__infinite"
        >
          <div v-if="isActive" class="emoji">🐻</div>
        </Transition>
      </div>

      <div class="card__action">
        <button type="button" @click="toggleEmoji">别点我</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = '铠甲勇士'
const isActive = ref(false)

const toggleEmoji = () => {
  isActive.value = !isActive.value
}

</script>

<style lang="css" scoped>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animation.css';
</style>