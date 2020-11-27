<template>
  <div class="full_wrap">
    <div v-if="$store.state.filteredStore.idx == 1" class="d1">
      <div class="container">
        <div class="row">
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="gold.png" width="100px" height="150px"  alt=""></div><div><span>1위</span></div> <div> <span class="cm"> {{  this.$store.state.filteredStore.datas[0].name }}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link1" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="silver.png" width="100px" height="150px" alt=""></div><div><span>2위</span></div> <div> <span class="cm"> {{  this.$store.state.filteredStore.datas[1].name }}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link2" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="blonze.png"  width="100px" height="150px" alt=""></div><div><span>3위</span></div> <div> <span class="cm"> {{this.$store.state.filteredStore.datas[2].name}}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link3" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="dda.png" width="100px" height="150px" alt=""></div><div><span>4위 </span></div><div> <span class="cm">{{this.$store.state.filteredStore.datas[3].name}}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link4" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="dda.png"  width="100px" height="150px" alt=""></div><div><span>5위</span></div><div> <span class="cm">{{this.$store.state.filteredStore.datas[4].name}}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link5" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card">
              <div class="card-content">
                <div><img src="dda.png"   width="100px" height="150px" alt=""></div><div><span>6위 </span></div><div> <span class="cm">{{this.$store.state.filteredStore.datas[5].name}}</span></div>
              </div>
              <div class="card-action">
                <div><a v-bind:href="link6" target="_blank"><img src="to.png" width="50px" height="50px" alt=""></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 2" class="d2">
      <table  class="striped">
        <thead>
          <tr>
            <th>#</th>
            <th>총 인구수</th>
            <th>공원 수</th>
            <th>유치원 수</th>
            <th>초등학교 수</th>
            <th>중학교 수</th>
            <th>고등학교 수</th>
            <th>특수학교 수</th>
            <th>학원 수</th>
            <th>여가시설 수</th>
            <th>음식점 수</th>
            <th>의료시설 수</th>
            <th>공기오염도 수</th>
            <th>cctv 수</th>
            <th>노인복지시설 수</th>
            <th>체육시설 수</th>
            <th>공공도서관</th>
          </tr>
        </thead>
        <tbody v-for="data in this.$store.state.filteredStore.datas ">
          <tr>
            <td>1. {{ data.name}}</td>
            <td>{{ data.population_all}}</td>
            <td>{{ data.park}}</td>
            <td>{{ data.kindergarten}}</td>
            <td>{{ data.school_elementary}}</td>
            <td>{{ data.school_middle}}</td>
            <td>{{ data.school_high}}</td>
            <td>{{ data.school_special}}</td>
            <td>{{ data.hagwon}}</td>
            <td>{{ data.leisure}}</td>
            <td>{{ data.restaurant}}</td>
            <td>{{ data.medical}}</td>
            <td>{{ data.air_pollution}}</td>
            <td>{{ data.cctv}}</td>
            <td>{{ data.senior_center}}</td>
            <td>{{ data.sport_facility}}</td>
            <td>{{ data.library}}</td>
          </tr>

        </tbody>
      </table>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==20"class="d4">
      <div><img src="cctv.png" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="academy.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="restaurant.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==30"class="d4">
      <div><img src="restaurant.png" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="kind.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="tree.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==40"class="d4">
      <div><img src="ele.png" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="mid.jpg" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="enter.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==50"class="d4">
      <div><img src="high.jpg" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="sport.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="park.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==60"class="d4">
      <div><img src="tree.png" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="restaurant.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="hos.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==70"class="d4">
      <div><img src="senior.jpg" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="sport.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="enter.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
    <div v-else-if="$store.state.filteredStore.idx == 3" v-show="$store.state.filteredStore.chartAge==80"class="d4">
      <div><img src="senior.jpg" width="100px" height="100px" alt=""><column-chart :data="firstChartData"  :options="firstOption"></column-chart></div>
      <div><img src="cctv.png" width="100px" height="100px" alt=""><column-chart :data="secondChartData"  :options="secondOption"></column-chart></div>
      <div><img src="enter.png" width="100px" height="100px" alt=""><column-chart :data="thirdChartData"  :options="thirdOption"></column-chart></div>
    </div>
<!--    <div v-else-if="$store.state.filteredStore.idx == 4" class="d4">-->
<!--      <div><img src="sport.png" width="100px" height="100px" alt=""><pie-chart :data="basePriceChartData"  :options="basePriceOption"></pie-chart></div>-->
<!--      <div><img src="senior.jpg" width="100px" height="100px" alt=""><column-chart :data="basePriceChartData"  :options="basePriceOption"></column-chart></div>-->
<!--      <div><img src="cctv.png" width="100px" height="100px" alt=""><bar-chart :data="basePriceChartData" :options="basePriceOption" ></bar-chart></div>-->
<!--    </div>-->


<!--    <div><button type="button" class="btn" v-on:click="getInform()"></button></div>-->



  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import 'tui-chart/dist/tui-chart.css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

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
export default class showInform2 extends Vue{
  idx?:number;

  link1 : string = ""
  link2 : string = ""
  link3 : string = ""
  link4 : string = ""
  link5 : string = ""
  link6 : string = ""


  basePriceData: number[] = [1];
  firstOPChart: Chart = {width: 700, height: 500, title: ''};
  ///chart 부분//
  firstChart: Series[] = [
    {name: this.$store.state.filteredStore.datas[0].name, data: this.$store.state.filteredStore.datas[0].park},
    {name: this.$store.state.filteredStore.datas[1].name, data: this.$store.state.filteredStore.datas[1].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: this.$store.state.filteredStore.datas[2].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: 50}
  ]
  // salePriceSeries: Series[] = []
  firstChartData: ChartData = {series: this.firstChart};
  // salePriceChartData: ChartData = {series: this.salePriceSeries};
  firstLegend: OptionSeries = {showLegend: false, showLabel: true, labelAlign: 'center',}
  firstOption: Options = {chart: this.firstOPChart, series: this.firstLegend};

  //second chart 부분
  secondOPChart: Chart = {width: 700, height: 500, title: ''};
  ///chart 부분//
  secondChart: Series[] = [
    {name: this.$store.state.filteredStore.datas[0].name, data: this.$store.state.filteredStore.datas[0].park},
    {name: this.$store.state.filteredStore.datas[1].name, data: this.$store.state.filteredStore.datas[1].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: this.$store.state.filteredStore.datas[2].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: 50}
  ]
  // salePriceSeries: Series[] = []
  secondChartData: ChartData = {series: this.firstChart};
  // salePriceChartData: ChartData = {series: this.salePriceSeries};
  secondLegend: OptionSeries = {showLegend: false, showLabel: true, labelAlign: 'center',}
  secondOption: Options = {chart: this.secondOPChart, series: this.firstLegend};


  //third chart 부분
  thirdOPChart: Chart = {width: 700, height: 500, title: ''};
  ///chart 부분//
  thirdChart: Series[] = [
    {name: this.$store.state.filteredStore.datas[0].name, data: this.$store.state.filteredStore.datas[0].park},
    {name: this.$store.state.filteredStore.datas[1].name, data: this.$store.state.filteredStore.datas[1].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: this.$store.state.filteredStore.datas[2].park},
    {name: this.$store.state.filteredStore.datas[2].name, data: 50}
  ]
  // salePriceSeries: Series[] = []
  thirdChartData: ChartData = {series: this.thirdChart};
  // salePriceChartData: ChartData = {series: this.salePriceSeries};
  thirdLegend: OptionSeries = {showLegend: false, showLabel: true, labelAlign: 'center',}
  thirdOption: Options = {chart: this.thirdOPChart, series: this.thirdLegend};


  @Watch('$store.state.filteredStore.datas', {deep: true})
  filterUpdate() {
    this.link1 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[0].name
    this.link2 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[1].name
    this.link3 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[2].name
    this.link4 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[3].name
    this.link5 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[4].name
    this.link6 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="+this.$store.state.filteredStore.datas[5].name
    this.firstChart = [
      {name: this.$store.state.filteredStore.datas[0].name, data: this.$store.state.filteredStore.datas[0].park},
      {name: this.$store.state.filteredStore.datas[1].name, data: this.$store.state.filteredStore.datas[1].park},
      {name: this.$store.state.filteredStore.datas[2].name, data: this.$store.state.filteredStore.datas[2].park}
    ]

    console.log(this.$store.state.filteredStore.datas[0].name)

  }

}
</script>

<style scoped>
.container{
  width: 2000px;
}
.card{
  width: 180px;
}
.cm{
  font-size:30px;
}

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
  font-size: 10px;
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
