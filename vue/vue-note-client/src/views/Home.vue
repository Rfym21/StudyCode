<template>
  <div class="note-class-wrapper">
    <div class="note-class">

      <header>
        <div @click="showMenu"> <van-icon name="wap-nav" /></div>
        <div>
          <van-icon name="edit" @click="toEdit"/>
          <van-icon name="like-o" />
          <van-icon name="search" />
        </div>

      </header>

      <section>
        <div class="note-item" :style="{ backgroundColor: item.bgColor }" v-for="(item, i) in noteClassList" :key="i"
          @click="toNoteList(item.name, item.title)">
          <span class="title">{{ item.title }}</span>
        </div>
      </section>

    </div>

    <!-- 侧边栏 -->
    <Menu :class="{ show: isShowMenu, menu: true }" @showMenu="showMenu" />
  </div>
</template>

<script setup>
import Menu from '../components/Menu.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isShowMenu = ref(false)

const noteClassList = [
  { bgColor: '#f0aa84', title: '美食', name: "foods" },
  { bgColor: '#dcf189', title: '旅行', name: "travel" },
  { bgColor: '#f1c2c2', title: '工作', name: "work" },
  { bgColor: '#e0c2f1', title: '恋爱', name: "love" },
  { bgColor: '#c2ebf1', title: '学习', name: "study" },
  { bgColor: '#949c9d', title: '吵架', name: "fight" }
]

const showMenu = () => {
  isShowMenu.value = !isShowMenu.value
}

const toNoteList = (name, title) => {
  router.push({ name: 'Note', params: {name}, query: { title } })
}


const toEdit = () => {
  router.push({ path: '/new' })
}

</script>

<style lang="less" scoped>
.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transform: translateX(0%);
    transition: transform 0.3s;

    &.hide {
      transform: translateX(100%);
    }

    header {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      margin: 10px 0;

      .van-icon {
        font-size: 24px;
        margin: 0 5px;
      }
    }

    section {
      width: 100%;

      .note-item {
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title {
          display: block;
          margin-top: 0.5333rem;
          text-align: center;
          font-size: 0.5333rem;
          color: #fff;
        }
      }
    }
  }

  .menu {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    transition: all 1s;

    &.show {
      transform: translateX(0%);
    }
  }
}
</style>