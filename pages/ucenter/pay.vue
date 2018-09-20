<template>
  <section>
    <h2>支付</h2>
    <el-row>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
        <!-- <img src="" class="image"> -->
        卡片
        <div style="padding: 14px;">
          <span>招商银行</span>
          <div class="bottom clearfix">
            <time class="time">银行卡期限</time>
            <el-button type="primary">充值</el-button>
            <el-button type="primary" plain>提现</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
    </el-row>
    <div>
      <!-- <div>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    </div> -->
    
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    </div>
   
  </section>
</template>

<script>


export default {
  layout: 'layout',
  components: {
    
  },
  // fetch({ store }) {
  //   store.commit('increment')
  // },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    sum(a,b){
      return a+b;
    }
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
