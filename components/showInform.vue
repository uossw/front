<template>
<div class="full_wrap">
  <div v-if="$store.state.filteredStore.idx == 1" class="d1">
    <div class="tm1">
      <div class="ttmp">
        <div><img src="gold.png" alt=""><span>1위 : 상봉동</span></div>
        <div><a v-bind:href="link" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
      </div>
    </div>
    <div class="tmp1">
      <div class="tm2 ttmp">
        <div class="ttmp">
          <div><img src="silver.png" alt=""><span>2위 : 회기동</span></div>
          <div><a v-bind:href="link" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
        </div>
      </div>
      <div class="tm3">
        <div class="ttmp">
          <div><img src="blonze.png" alt=""><span>3위 : 장안동</span></div>
          <div><a v-bind:href="link" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="$store.state.filteredStore.idx == 2" class="d2">
    <table class="table  table-striped">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">총 인구수</th>
        <th scope="col">공원 수</th>
        <th scope="col">유치원 수</th>
        <th scope="col">초등학교 수</th>
        <th scope="col">중학교 수</th>
        <th scope="col">고등학교 수</th>
        <th scope="col">특수학교 수</th>
        <th scope="col">학원 수</th>
        <th scope="col">여가시설 수</th>
        <th scope="col">음식점 수</th>
        <th scope="col">의료시설 수</th>
        <th scope="col">공기오염도 수</th>
        <th scope="col">cctv 수</th>
        <th scope="col">노인복지시설 수</th>
        <th scope="col">체육시설 수</th>
        <th scope="col">공공도서관</th>

      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1. {{ this.$store.state.filteredStore.datas[0].name}}</th>
        <td>{{ this.$store.state.filteredStore.datas[0].population_all}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].school}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>

      </tr>
      <tr>
        <th scope="row">2. {{ this.$store.state.filteredStore.datas[1].name}}</th>
        <td>{{ this.$store.state.filteredStore.datas[1].population_all}}</td>
        <td>{{this.$store.state.filteredStore.datas[1].school}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>

      </tr>
      <tr>
        <th scope="row">3. {{ this.$store.state.filteredStore.datas[2].name}}</th>
        <td>{{ this.$store.state.filteredStore.datas[2].population_all}}</td>
        <td>{{ this.$store.state.filteredStore.datas[2].school}}</td>
        <td>{{ this.$store.state.filteredStore.datas[2].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[1].park}}</td>
        <td>{{ this.$store.state.filteredStore.datas[0].park}}</td>

      </tr>
      </tbody>
    </table>


  </div>
  <div v-else-if="$store.state.filteredStore.idx == 3" class="d4">
    <div><img src="tree.png" width="100px" height="100px" alt=""><pie-chart :data="basePriceChartData"  :options="basePriceOption"></pie-chart></div>
    <div><img src="hos.png" width="100px" height="100px" alt=""><column-chart :data="basePriceChartData"  :options="basePriceOption"></column-chart></div>
    <div><img src="school.png" width="100px" height="100px" alt=""><bar-chart :data="basePriceChartData" :options="basePriceOption" ></bar-chart></div>
  </div>
  <div v-else-if="$store.state.filteredStore.idx == 4" class="d4">
    <div><img src="sport.png" width="100px" height="100px" alt=""><pie-chart :data="basePriceChartData"  :options="basePriceOption"></pie-chart></div>
    <div><img src="senior.jpg" width="100px" height="100px" alt=""><column-chart :data="basePriceChartData"  :options="basePriceOption"></column-chart></div>
    <div><img src="cctv.png" width="100px" height="100px" alt=""><bar-chart :data="basePriceChartData" :options="basePriceOption" ></bar-chart></div>
  </div>


  <div><button type="button" class="btn" v-on:click="getInform()"></button></div>



</div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import 'tui-chart/dist/tui-chart.css'

//@ts-ignore
import {pieChart, lineChart, barChart, columnChart} from '@toast-ui/vue-chart'
import filterStore, { Inform } from '~/store/filteredStore';




interface ChartData {
  series: Series[];
}
interface Series {
  name: string;
  data: number;
}
interface Options {
  chart: Chart;
  series: OptionSeries;
}
interface Chart {
  width: number;
  height: number;
  title: string;
}
interface OptionSeries {
  showLegend: boolean;
  showLabel: boolean;
  labelAlign: string;
}
//@ts-ignore
@Component({
  components: {
    'pie-chart': pieChart,
    'line-chart': lineChart,
    'bar-chart' : barChart,
    'column-chart' : columnChart
  }
})
export default class showInform extends Vue{
  idx?:number;

  link : string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=상봉동"

  basePriceData: number[] = [1];
  basePriceChart: Chart = {width: 700, height: 500, title: '판매 원가 기준 아이템 분포도'};
  basePriceSeries: Series[] = [ {name: '10000원이하', data: 33}, {name: '10000원이하', data: 33}, {name: '10000원이하', data: 33}]
  // salePriceSeries: Series[] = []
  basePriceChartData: ChartData = {series: this.basePriceSeries};
  // salePriceChartData: ChartData = {series: this.salePriceSeries};
  priceLegend: OptionSeries = {showLegend: false, showLabel: true, labelAlign: 'center',}
  basePriceOption: Options = {chart: this.basePriceChart, series: this.priceLegend};
  getInform(){
    this.$store.dispatch('filteredStore/initData', "dfd" );
    // this.datas = this.$store.state.filteredStore.datas;

  }


}
</script>

<style scoped>

.full_wrap{
  margin-top : 50px;
  text-align : center;
  /*width:1000px;*/
  height: 500px;
}

.d1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30pt;
}

.d4{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
table {
  height: 300px;
}
thead{
  font-size: 20px;
}
.ttmp{
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.tmp1{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tm1{
  margin-left: 150px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.tm2, .tm3{
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.tm1, .tm2, .tm3{
  margin-left: 20px ;
  border-style: solid;
  border-color: skyblue;
  border-radius: 20%;
  width: 500px;
  height: 300px;
}



</style>
