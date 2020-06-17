<template>
    <div class="wrap">
        <div>练习echarts</div>
        <div class='charts' ref="data1">

        </div>
        <div class='charts' ref="data2">

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        data1:[]
    }
  },
  methods: {
    drawDate1() {
      const data1 = this.$echarts.init(this.$refs.data1)
      data1.setOption({
        title: {
          text: 'ECharts 入门示例', //标题
          x:50, //标题的横向偏移量
          y:0//标题的总想偏移量
        },
        toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line',  'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
        tooltip: {},
        legend: {
          data: ['销量', '收入'],
          y:'bottom'
        },
        xAxis:  [{
            data:['1','2','3','4','5']
          }]
        ,
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
          },
          {
            name: '收入',
            type: 'bar',
            data: [2, 30, 20, 8, 29,]
          }
        ]
      })
    },
    drawDate2() {
      const data2 = this.$echarts.init(this.$refs.data2)
      data2.setOption({
        backgroundColor: '#fff',
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType:'angle',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
  },
  mounted() {
    this.drawDate1()
    this.drawDate2()
  }
}
</script>
<style scoped lang="scss">
.wrap {
  .charts {
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
  }
}
</style>
