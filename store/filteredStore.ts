import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import AxiosService from '@/service/axios.service';
import axios from "axios";
import * as https from "https";


export interface Inform{
  district:string
  name: string
  population_all: number
  school: number
  park : number
}


export interface Expriority{
  age: string
  aes: string
}


@Module
export default class FilterStore extends VuexModule {
  idx: number =0;
  priIdx:number = 0;
  datas?: Inform[];
  @Mutation
  leftTurn() {
    if(this.idx == 1){}
    else {
      this.idx--;
    }
    console.log("execure")
  }



  @Mutation
  rightTurn() {
    if(this.idx == 4){}
    else {
      this.idx++;
    }

  }

  @Mutation
  priLeftTurn() {
    if(this.priIdx == 0){}
    else {
      this.priIdx--;
    }
    console.log("execure")
  }


  @Mutation
  priRightTurn() {
    if (this.priIdx == 15) {
    } else {
      this.priIdx++;
    }
  }

  @Mutation
  tmpMutation(informs: Inform[]) {
      console.log(informs)
      this.idx = 1
      this.datas = informs


  }
//
//   @Mutation
//   setChartList(chartItems: ChartItems) {
//     this.basePriceList = chartItems.basePriceList;
//     this.salePriceList = chartItems.salePriceList;
//   }
//
//Axios로 API에 옵션, 쿼리 넣어 가져오는 비동기 처리 Action
  @Action({rawError: true})
  async initData(elements: Expriority) {

    let query:string = "&age="+elements.age+"&search="+elements.aes


    console.log(query)

// At request level

    axios.get('http://localhost:8000/api/dong?format=json'+query).then(res=>{

      this.context.commit('tmpMutation', res.data)}
      );


  }
//   }
//
//   //Axios로 API에 옵션, 쿼리 넣어 차트 분석을 위한 데이터를 가져 오는 비동기 처리 Action
//   @Action
//   async analysisChart(lastPage: number) {
//
//     const basePriceList: number[] = [];
//     const salePriceList: number[] = [];
//     const pageIdx: number = lastPage;
//     const numItem: number | undefined = this.numItem;
//     const filterList: Filter[] = this.context.rootState.filterStore.filterList;
//
//     let total = '';
//     if (numItem) {
//       const per_page: string = '&per_page=' + numItem;
//       total = total + per_page;
//     }
//     //Query Part
//     let query: string = '&query=';
//     if (filterList.length === 0) {
//       query = '';
//     } else {
//
//       for (let i = 0; i < filterList.length; ++i) {
//         if (filterList[i].fWhat === 'name') {
//           query = query + filterList[i].fWhat + ' ct "' + filterList[i].fSo + '"';
//         } else if (filterList[i].fWhat === 'created_at') {
//           query = query + filterList[i].fWhat + filterList[i].fHow + '"' + filterList[i].fSo + '"';
//         } else {
//           query = query + filterList[i].fWhat + filterList[i].fHow + filterList[i].fSo;
//         }
//         if (i === filterList.length - 1) {
//         } else {
//           query = query + ' and '
//         }
//       }
//       total = total + query;
//
//     }
//
//     for (let i = 1; i <= pageIdx; ++i) {
//       const page: string = 'page=' + i;
//       const response: AxiosResponse = await AxiosService.instance.get('api/products?' + page + total);
//
//       for (let i = 0; i < response.data.data.length; ++i) {
//         basePriceList.push(response.data.data[i].base_price);
//         salePriceList.push(response.data.data[i].sale_price);
//       }
//
//     }
//     this.context.commit('setChartList', {
//       basePriceList: basePriceList,
//       salePriceList: salePriceList
//     });
//   }
}
