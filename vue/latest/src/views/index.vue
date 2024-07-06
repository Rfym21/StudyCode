<template>
  <div class="container">

    <div class="nav">
      <div class="time">{{ now }}</div>
      <div class="city" @click="state.show = true">切换城市</div>
    </div>

    <div class="city__info">
      <p class="city">{{ state.city }}</p>
      <p class="weather">{{ state.today.weather }}</p>

      <h2 class="temp">
        <em>{{ state.today.temperature }}</em>℃
      </h2>

      <div class="detail">
        <span>风力: {{ state.today.windPower }} 级</span> |
        <span>风向: {{ state.today.windDirection }} 风</span> |
        <span>空气湿度: {{ state.today.humidity }}%</span>
      </div>

    </div>

    <div class="future" v-if="state.future.length">
      <!-- <div class="future"> -->
      <div class="group">
        明天: |
        <span class="tm">白天: {{ state.future[1].dayTemp }}℃ {{ state.future[1].dayWeather }} {{ state.future[1].dayWindDir
        }}风
          {{
            state.future[1].dayWindPower }}级</span> |

        <span class="tm">夜间: {{ state.future[1].nightTemp }}℃ {{ state.future[1].nightWeather }} {{
          state.future[1].nightWindDir }}风 {{
    state.future[1].nightWindPower }}级</span>

      </div>
      <div class="group">
        后天: |
        <span class="tm">白天: {{ state.future[2].dayTemp }}℃ {{ state.future[2].dayWeather }} {{
          state.future[2].dayWindDir }}风 {{
    state.future[2].dayWindPower }}级</span> |

        <span class="tm">夜间: {{ state.future[2].nightTemp }}℃ {{ state.future[2].nightWeather }}风 {{
          state.future[2].nightWindDir }} {{
    state.future[2].nightWindPower }}级</span>

      </div>
    </div>

    <van-action-sheet v-model:show="state.show">
      <div class="content">
        <van-area title="地区" :columns-num=2 :area-list="areaList" @confirm='selectCity' @cancel="state.show = false" />
      </div>
    </van-action-sheet>

    <div class="echarts-wrap" ref="echartsWrap"></div>

  </div>
</template>

<!-- 
  <script>
export default {
  setup() {

  }
}
</script>
 -->

<script setup>

import { ref, reactive, onMounted, nextTick } from 'vue'
// 城市数据
import { areaList } from '@vant/area-data'
import * as echarts from 'echarts'


let now = ref('00:00:00')
setInterval(() => {
  now.value = new Date().toLocaleTimeString()
}, 1000)

const state = reactive({
  city: '',
  today: {},
  future: [],
  show: false
})

// 高德api IP定位
AMap.plugin('AMap.CitySearch', function () {

  var citySearch = new AMap.CitySearch()

  citySearch.getLocalCity(function (status, result) {

    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
      console.log("------------------------------------\n城市信息:", result)
      state.city = result.city
      getWeather(result.city)
    }

  })

})


// 获取天气
const getWeather = (city) => {
  //加载天气查询插件
  AMap.plugin("AMap.Weather", function () {
    //创建天气查询实例
    var weather = new AMap.Weather()

    weather.getLive(city, function (err, data) {
      console.log("------------------------------------\n天气状况:", data)
      //err 正确时返回 null
      //data 返回实时天气数据，返回数据见下表
      state.today = data
    });

    weather.getForecast(city, function (err, data) {
      console.log("------------------------------------\n天气预报:", data)
      //err 正确时返回 null
      //data 返回天气预报数据，返回数据见下表
      state.future = data.forecasts
      nextTick(() => {
        // nextTick 保证dom已经渲染完毕后再执行
        initEcharts(data.forecasts)
      })
    })

  })
}

const selectCity = ({ selectedOptions }) => {
  console.log("------------------------------------\n选择的城市:", selectedOptions[1].text)
  state.city = selectedOptions[1].text
  getWeather(selectedOptions[1].text)
  state.show = false
}

const echartsWrap = ref(null)

const initEcharts = (arr) => {
  // console.log(echartsWrap.value)
  let myChart = echarts.init(echartsWrap.value)
  myChart.setOption({
    xAxis: {
      type: 'category',
      data: ['今天', '明天', '后天', '大后天']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: arr.map(item => item.dayTemp),
        type: 'line'
      }
    ]
  })
}



onMounted(() => {
  console.log('挂载后')
})



</script>

<style lang="css" scoped>
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
}

.nav {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.city__info {
  text-align: center;
}

p {
  margin-top: 10px;
}

.temp {
  margin: 10px 0;
  font-size: 26px;
}

.temp em {
  font-size: 34px;
}

.detail {
  margin: 10px;
}

.future {
  margin-top: 30px;
  padding: 0 10px;
}

.group {
  padding: 0 10px;
  text-align: center;
  height: 44px;
  font-size: 13px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
  border-radius: 5px;
}

.echarts-wrap {
  width: 100%;
  height: 50vh;
}
</style>