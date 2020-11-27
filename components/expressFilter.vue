<template>
  <div>
    <div class="m1">
      <div class="s0">
        <div class="mm">
        <div class="d01"><span class="sp1">나이를 정해주세요:</span></div>
        <div class="d02">
          <select class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-model="expriority.age">
            <option value="20"  selected>20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대</option>
            <option value="80">80대</option>
            <option value="90">90대</option>

          </select></div>

        </div>

        <div class="de">
        <span class="sp0">KEYWORD:</span>
        <input class="in" v-model="expriority.aes" placeholder="ex)자녀,맛집,공원">

          <button type="button" class="btn btn-success"  v-on:click="getInform()">
            <span class="sp2">확인</span>
            <span class="sp3">√</span>
          </button>
        </div>
      </div>
    </div>
    <div class ="wrap">




    </div>


  </div>
</template>

<script lang='ts'>
import {Vue, Component, Watch} from 'vue-property-decorator';
import {Expriority, Inform} from "~/store/filteredStore";




//@ts-ignore
@Component
export default class expressFilter extends Vue {
  idx: number = 1;
  datas?: Inform[];

  expriority: Expriority = {age:"", aes:""}




  elements?: Expriority;
  getInform(){

    this.$store.dispatch('filteredStore/initData', this.expriority);
    this.datas = this.$store.state.filteredStore.datas;
  }

  plusShow(){
    this.$store.commit('filteredStore/priRightTurn');
    console.log(this.$store.state.filteredStore.priIdx)
  }

  minusShow(){
    this.$store.commit('filteredStore/priLeftTurn');
    console.log(this.$store.state.filteredStore.priIdx)
  }



}

</script>

<style scoped>
.sp0{
  font-size:40px;
}
.in{
  font-size: 40px;
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
}


.d1{
  margin-bottom:10px;
}

.s0{
  display: flex;
  flex-direction: row;
  justify-content: center;
}


.wrap{
  margin-left:50px;
  display: flex;
  flex-direction: row;
    /*justify-content: space-evenly;*/
  text-align: center;
}
.s0{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.m1{
  display: flex;
  flex-direction: row;
  justify-content: center;}

.sp1{
  font-size: 25px;
}

.s1, .s2, .s3, .s4, .s5, .s6, .s7 ,.s8, .s9, .s10, .s11, .s12, .s13, .s14, .s15{
  font-size: 15px;
  margin-left: 20px;
}


.d01, .d02, .d03{

  margin-right: 20px;
}

.d03{}


.mm{display: flex;
  flex-direction: row;}

</style>
