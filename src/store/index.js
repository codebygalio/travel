import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    city: localStorage.city || '上海'
  },
  mutations: {
    changeCity (state, city) {
        state.city = city
        try {
          localStorage.city = city
        } catch (e) {}
      }
  },
  actions: {
    changeCity(ctx,city){
        ctx.commit('changeCity',city)
    }
  },
  modules: {
  }
})
