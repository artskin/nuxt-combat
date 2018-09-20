<template>
<div>
  <el-tag>优惠券</el-tag><br>
  <el-tag type="success">现金券 ￥50</el-tag><br>
  <el-tag type="info">加息券 +1%</el-tag><br>
  <el-tag type="warning">体验金 ￥1000</el-tag><br>
  <el-tag type="danger">红包 ￥50</el-tag>
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