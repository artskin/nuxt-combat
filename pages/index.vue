<template>

  <section class="container">
    
    <div class="login">
      <!-- <app-logo/> -->
      
      <!-- <div><img src="~assets/images/logo-2.png" alt=""></div> -->
      <div class="user-pic">
        <div class="round">
          <div class="round-inner"></div>
        </div>
        <img src="~assets/images/head.png" alt="">
      </div>
      
      <div class="login-box">
        <h1 class="title">XX数据系统</h1>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <div class="links">
            <a href="/ucenter/" class="button--green">登录</a>
          </div>
          <!-- <el-form-item label="记住密码？">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item> -->
          <!-- <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item> -->
        </el-form>
        
      </div>
        
    </div>
    <canvas class="canvasbg" id="canvasbg" ref="canvasbg"></canvas>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import {canvasInit} from '../assets/canvasBg.js'

export default {
  components: {
    AppLogo
  },
  data(){
    return{
      form: {
        name: '',
        pwd: '',
        delivery: false,
      }
    }
  },
  mounted() {
    canvasInit(this.$refs.canvasbg,60)
  },
  methods:{
    onSubmit(){
      alert("chengg")
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #00367c;
  background: -webkit-linear-gradient(130deg, #00367c, #301b66); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(130deg, #00367c, #301b66); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(130deg, #00367c, #301b66); /* Firefox 3.6 - 15 */
  background: linear-gradient(130deg, #00367c, #301b66); /* 标准的语法（必须放在最后） */
}
.login{position: relative;z-index: 1;width: 100%;height: 100%;}
.login-box{width: 400px;height: 280px;margin: 30px auto;
padding: 20px 40px 20px 20px;
background: rgba(255, 255, 255, .1);
box-shadow: 0 0 5px rgba(255, 255, 255, .1);
border: 0.5px solid rgba(255, 255, 255, .3);
border-radius: 10px;
}
.canvasbg{width: 100%;height: 100%;position: absolute;left: 0;top: 0;}
.login .el-form-item__label{color: aliceblue}
.login .el-input__inner{background: rgba(255,255,255,.3);border: 1px solid rgba(255,255,255,.3)}
.user-pic,.round{width: 140px;height: 140px;}
.round{
  position: absolute;
  z-index: 0;
  background-image: url('~assets/images/round.png');
  background-size: 100% 100%;
  animation: rotate 10s ease-in-out -2s infinite alternate;
  /* Firefox: */
  -moz-animation: rotate 30s ease-in-out -2s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: rotate 30s ease-in-out -2s infinite alternate;
  /* Opera: */
  -o-animation: rotate 30s ease-in-out -2s infinite alternate;
}
.round-inner,
.round::after,
.round::before{
  content: ' ';
  position: absolute;
  background-size: 100% 100%;
}
.round::before{
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  background-image: url('~assets/images/round-m.png');
  animation: rotate_m 1s ease-in -2s infinite normal;
}
.round::after{
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  background-image: url('~assets/images/round-m-s.png');
  animation: rotate_m_2 1s linear -2s infinite normal;
}
.round-inner{
  width: 70%;
  height: 70%;
  left: 15%;
  top: 15%;
  background-image: url('~assets/images/round-xs.png');
  animation: rotate_m 10s linear -2s infinite normal;
}
.user-pic{margin: 0 auto;position: relative;}
.user-pic img{width: 68%;height: 68%;border-radius: 80px;vertical-align: middle;position: absolute;left: 16%;top: 16%}

@keyframes rotate {
  0%{ -webkit-transform:rotate(0deg);}
	100%{-webkit-transform:rotate(-360deg);}
}
@keyframes rotate_m {
  0%{ -webkit-transform:rotate(0deg);}
	100%{-webkit-transform:rotate(360deg);}
}
@keyframes rotate_m_2 {
  0%{ -webkit-transform:rotate(0deg);}
	100%{-webkit-transform:rotate(-360deg);}
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: rgba(255,255,255,.8);
  letter-spacing: 1px;
  padding-bottom: 15px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
