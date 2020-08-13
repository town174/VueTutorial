<template>
  <div id="main">
    <!--为echarts准备一个具备大小的容器dom-->
    <h1 style="display:inline-block;">在架图书：</h1><h1 style="display:inline-block;">{{this.total.onshelf}}</h1>
    <br>
    <h1 style="display:inline-block;">阅览图书：</h1><h1 style="display:inline-block;">{{this.total.reading}}</h1>
    <br>
    <h1 style="display:inline-block;">历史搜索：</h1><h1 style="display:inline-block;">{{this.total.search}}</h1>
    <br>
    <h1 style="display:inline-block;">最近上架：</h1><h1 style="display:inline-block;">{{this.total.upshelf}}</h1>
    <div id="pie"  style="width: 800px; height: 600px; margin: 0 auto;"></div>
    <div id="line" style="width: 800px; height: 600px; margin: 0 auto;"></div>
    <div id="bar"  style="width: 800px; height: 600px; margin: 0 auto;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "charts_demo",
  data() {
    return {
      total: {
         onshelf:20000,
         reading:1000,
         search: 50000,
         upshelf:2000,
      },
      pie: {
        charts: "",
        title:"热搜词比例",
        opinion: ["你当像鸟飞往你的山", "书店日记", "时间的秩序", "OPUS作品", "喜鹊谋杀案",
                  "萨拉戈萨手稿", "鸟瞰古文明", "人生海海", "佛兰德镜子", "82年生的金智英"],
        opinionData: [
          { value: 335, name: "你当像鸟飞往你的山" },
          { value: 310, name: "书店日记" },
          { value: 234, name: "时间的秩序" },
          { value: 135, name: "OPUS作品" },
          { value: 348, name: "喜鹊谋杀案" },
          { value: 305, name: "萨拉戈萨手稿" },
          { value: 110, name: "鸟瞰古文明" },
          { value: 434, name: "人生海海" },
          { value: 135, name: "佛兰德镜子" },
          { value: 648, name: "82年生的金智英" },
        ]
      },
      line: {
        charts: "",
        title:"阅读时长趋势图",
        opinion: ["马列", "哲学", "社会科学", "自然科学", "综合性图书"],
        dataX: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        dataSeries: [
          {
            name: "马列",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "哲学",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "社会科学",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "自然科学",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "综合性图书",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      bar:{
        charts: "",
        title:"上架数量图",
        opinion: ["马列", "哲学", "社会科学", "自然科学", "综合性图书"],
        dataX: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        dataSeries:[
          {
            name: '马列',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
                    {
            name: '哲学',
            type: 'bar',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '社会科学',
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '自然科学',
            type: 'bar',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '综合性图书',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
        ]
      }
    };
  },
  methods: {
    drawPie(id) {
      this.pie.charts = echarts.init(document.getElementById(id));
      this.pie.charts.setOption({
        title: {
          text: this.pie.title,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: this.pie.opinion,
          top:"50"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "blod"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.pie.opinionData
          }
        ]
      });
    },
    drawLine(id) {
      this.line.charts = echarts.init(document.getElementById(id));
      this.line.charts.setOption({
        title: {
          text: this.line.title
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: this.line.opinion
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: this.line.dataX
        },
        yAxis: {
          type: "value"
        },
        series: this.line.dataSeries
      });
    },
    drawBar(id){
      this.bar.charts = echarts.init(document.getElementById(id));
      this.bar.charts.setOption({
        title: {
          text: this.bar.title
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: this.bar.opinion
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: this.bar.dataX
        },
        yAxis: {
          type: "value"
        },
        series: this.bar.dataSeries
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawPie("pie"), 
      this.drawLine("line"),
      this.drawBar("bar")
    });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
  
  