<template>
  <div>
    <button @click="increment">{{ counter }}</button><br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="投资时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="投资金额">
      </el-table-column>
      <el-table-column
        prop="days"
        label="持有天数">
      </el-table-column>
    </el-table>
  </div>
    
  </template>

  <script>
  import { mapState } from 'vuex'
    export default {
      layout: 'layout',
      data() {
        return {
          title:"投资记录",
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '2000',
            days: '10天'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '2000',
            days: '10天'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '2000',
            days: '10天'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '10000',
            days: '10天'
          }]
        }
      },

      computed: mapState([
        'counter'
      ]),
      methods:{
        increment() {
          this.$store.commit('increment')
        }
      }
    }
  </script>