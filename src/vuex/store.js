import Vue from 'vue'
import Vuex from "vuex";
import {SummaryService} from '../services/summaryService.js'
import {STATUS_CODE} from '../utils/constants/settingSystem.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading:false,
    summary:{}
  },
  mutations: {
    getSummary(state,summary){
      state.summary=summary
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
    }
    
  }
});
