<template>
  <section>
    
    <h2>欢迎来到用户中心</h2>
    <el-row>
      <el-col :span="12">
        账户余额：
        <span>0.00</span>
      </el-col>
      <el-col :span="12">
        <el-button type="primary">充值</el-button>
        <el-button type="primary" plain>提现</el-button>
      </el-col>
    </el-row>
    
    <el-row>
      <el-col :span="8">
        <dl>
          <dt>总资产</dt>
          <dd>102,120.00</dd>
        </dl>
      </el-col>
      <el-col :span="8">
        <dl>
          <dt>累计收益</dt>
          <dd>2,120.00</dd>
        </dl>
      </el-col>
      <el-col :span="8">
        <dl>
          <dt>积分</dt>
          <dd>120.00</dd>
        </dl>
      </el-col>
    </el-row>
      
      
   
  </section>
</template>

<script>


export default {
  layout: 'layout',
  components: {
    
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
