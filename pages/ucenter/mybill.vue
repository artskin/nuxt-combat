<template>
<div>
  <h2>{{title}}：</h2>
  <div>
    {{ $store.state.counter }}
    {{ $store.state.vip }}
  </div>
  <el-steps :space="200" :active="1" finish-status="success">
    <el-step title="接受订单"></el-step>
    <el-step title="已发快递"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
  <el-alert
    :title=warning[0].suc
    type="success">
  </el-alert>
  <el-alert
    :title=warning[1].err
    type="info">
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning">
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error">
  </el-alert>
  <ul>
    <li v-for="item in uerDataList" v-bind:key="item.key">
      <span>{{item.name}}</span> | 
      <span>{{item.province}}</span> | 
      <span>{{item.city}}</span> | 
      <span>{{item.address}}</span>
    </li>
  </ul>
  
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in uerDataList" :key="o.id" class="text item">
      {{'列表内容 ' + o.name }}
    </div>
  </el-card>
  <br>
  <br>
  <el-table
    :data="uerDataList"
    style="width: 100%;display:block"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="全部"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="充值"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="提现"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="还本"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="派息"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="奖励"
      width="120">
    </el-table-column>
  </el-table>
  
</div>
</template>

  <script>
    export default {
      layout: 'layout',
      data() {
        return {
          warning:[
            {suc:"成功"},
            {err:"错误"},
            {info:"信息"},
          ],
          title:"资金记录",
          uerDataList: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
        }
      }
    }
  </script>