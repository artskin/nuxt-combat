<template>
  <el-container class="layout">
    <el-header>
      <div class="layout-logo">
        <i class="iconfont icon-LogoWhalel"></i>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户中心</template>
            <el-menu-item-group>
              <template slot="title">账户一览</template>
              <router-link to="pay">
                <el-menu-item index="1-1">充值/提现</el-menu-item>
              </router-link>
              <router-link to="mybill">
                <el-menu-item index="1-2">资金记录</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="我的理财">
              <router-link to="myinvest">
              <el-menu-item index="1-3">我的投资</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">福利专区</template>
              <el-menu-item index="1-4-1">我的宝券</el-menu-item>
              <el-menu-item index="1-4-2">会员福利</el-menu-item>
              <el-menu-item index="1-4-3">我的人脉奖</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>设置</template>
            <el-menu-item-group>
              <template slot="title">密码设置</template>
              <el-menu-item index="2-1">登录密码</el-menu-item>
              <el-menu-item index="2-2">交易密码</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="存管账户">
              <el-menu-item index="2-3">开户状态</el-menu-item>
              <el-menu-item index="2-3">我的银行卡</el-menu-item>
              <el-menu-item index="2-4">银行预留手机号</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><nuxt/></el-main>
      
    </el-container>
    <el-footer>
      <p>© 2018 上海永利宝网络信息科技有限公司 沪ICP备13037734号</p>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      title: '用户中心',
      activeIndex:"1",
      activeIndex2: '1'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: '用户中心', name: '用户信息展示', content: '用户投资，收益，充值，提现数据' }
      ]
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
body{padding:0;margin:0}
@font-face {
  font-family: 'iconfont';  /* project id 732420 */
  src: url('//at.alicdn.com/t/font_732420_yz1wky0uhnj.eot');
  src: url('//at.alicdn.com/t/font_732420_yz1wky0uhnj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_732420_yz1wky0uhnj.woff') format('woff'),
  url('//at.alicdn.com/t/font_732420_yz1wky0uhnj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_732420_yz1wky0uhnj.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-LogoWhalel:before { content: "\e602"; }

.layout{
    /* max-width: 1000px;
    margin: 0 auto; */
}
.layout-logo{
    width: 100px;
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-logo .icon-LogoWhalel{font-size: 40px;color:darkgreen}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.el-header{
  /* background: #3e4f72; */
  /* min-height: 100px; */
}
.el-menu{float: right}
.el-footer{font-size: 12px;color: #666;text-align: center;border-top:1px solid #ddd;}
</style>