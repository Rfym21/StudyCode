<template>
  <div class="login">

    <h1>登录</h1>
    <div class="login-wrapper">
      <!-- 头像 -->
      <div class="avatar">
        <img src="../assets/images/avatar.png" alt="">
      </div>
      <!-- 提交表单 -->
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />

          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <!-- 提交按钮 -->
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">登录</van-button>
        </div>
      </van-form>

    </div>
    <p class="register">新用户?点击注册</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../api/index.js'

const username = ref('')
const password = ref('')

// 登录表单提交事件
const onSubmit = async (values) => {
  // 向后端发登录请求验证
  const res = await axios.post('/user/login', values)
  console.log(res)
}

</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    height: 0.6933rem;
    font-size: 0.48rem;
    text-align: center;
    line-height: 0.6933rem;
    margin-top: 1.12rem;
    font-weight: 700;
    overflow: hidden;
  }

  .login-wrapper {
    width: 7.44rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem rgba(170, 170, 170, 1);
    padding-bottom: 10px;

    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1rem auto 0.77rem;
      overflow: hidden;
      border-radius: 50%;

      img {
        width: 100%;
      }
    }
  }

  .register {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translate(-50%, 0)
  }

}

:deep(.vant-field_label) {
  width: 45px;
}
</style>