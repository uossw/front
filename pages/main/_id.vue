<template>
  <div class="container">
    <div class="title">

    <p class="t_p"> AI Express</p>
      <img src="~/static/2.PNG" width="100px" height="100px" alt=""/>
    </div>
    <div>
      <expressFilter></expressFilter>
    </div>
    <div class="show">
      <showInform></showInform>
    </div>
    <div >
      <footerFilter></footerFilter>
    </div>
  </div>


</template>

<script lang ='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

import expressFilter from '@/components/expressFilter';
import showInform from '@/components/showInform2';
import footerFilter from '~/components/footerFilter.vue';

@Component({
  components: {
    expressFilter,
    showInform,
    footerFilter,
  }

})

// @Component
export default class Main extends Vue{

}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap');
.t_p{
  font-size: 50pt;
}
.title{
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.total_wrap{
  /*font-family: 'Do Hyeon', sans-serif;*/
  display : flex;
  flex-direction: column;
  justify-content: space-around;
}
.show{
  margin-top : 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}

.title{
  border-style: solid;
  border-color: skyblue;
}

</style>
