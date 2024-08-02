<template>
  <div class="w-screen h-screen">

    <van-nav-bar left-arrow>
      <template #right>
        <span class="text-xs text-gray-400">遇到问题</span>
      </template>
    </van-nav-bar>

    <h1 class="text-2xl font-bold text-center my-10">登录</h1>

    <van-form @submit="onsubmit" model="params">

      <van-cell-group inset>
        <van-field v-model="params.username" name="username" label="用户名" placeholder="请输入用户名"
          :rules="[{ require: true, message: '请填写用户名' }]">
        </van-field>

        <van-field v-model="params.password" name="password" label="密码" placeholder="请输入密码"
          :rules="[{ require: true, message: '请填写密码' }]">
        </van-field>
      </van-cell-group>

      <div style="mt-4">
        <van-button block color="#d2d2d2" native-type="submit">登录</van-button>
      </div>
      <div class="text-center" @click="toRegister">
        没有账号，点击注册
      </div>
      <span class="text-ms ml-4 text-[#e6723c]">请先同意必选条款</span>
      <van-field name="checkbox">
        <template #input>
          <van-checkbox v-model="checked" shape="square">
            <span class="text-xs ml-2">(必选)我同意<a href="#">《用户协议》</a>和<a href="#">《使用条款》</a></span>
          </van-checkbox>
        </template>
      </van-field>

    </van-form>


  </div>
</template>

<script setup lang="ts">
// ts类型约束
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const checked = ref<Boolean>(false)

interface loginInfo {
  username: string,
  password: string
}

const params = reactive<loginInfo>({
  username: '',
  password: ''
})

const onsubmit = () => {
  console.log('onsubmit')
}

const toRegister = () => {
  router.push('/register')
}

</script>

<style scoped>
:deep(.vant-icon-arrow-left) {
  @apply text-2xl text-black
}

:deep(.vant-checkbox__icon--checked) {
  @apply bg-[#e6723c] border-[#e6723c]
}
</style>