import Vue from 'vue'
import Vuex from "vuex";
import {SummaryService} from '../services/summaryService.js'
import {CountryInfoService} from '../services/countryInfoService'
import {STATUS_CODE} from '../utils/constants/settingSystem.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading:false,
    summary:{},
    countryInfo:[],
  },
  mutations: {
    getSummary(state,summary){
      state.summary=summary
    },
    getCountryInfo(state,countryInfo){
      state.countryInfo=countryInfo
    },
    displayLoading(state){
      state.loading=true
    },
    hideLoading(state){
      state.loading=false
    }
  },
  actions:{
    getSummary: async function (context){
      context.commit('displayLoading')
      await SummaryService.getSummary()
      .then(({data,status})=>{
        if(status===STATUS_CODE.SUCCESS){
          context.commit('getSummary',data)
        }
      }).catch(err=> console.log(err))
      context.commit('hideLoading')
    },
    getCountryInfo: async function (context,id){
      context.commit('displayLoading')
      await CountryInfoService.getCountryInfo(id)
      .then(({data,status})=>{
        if(status===STATUS_CODE.SUCCESS){
          context.commit('getCountryInfo',data)
        }
      }).catch(err=> console.log(err))
      context.commit('hideLoading')
    }
  }
});
