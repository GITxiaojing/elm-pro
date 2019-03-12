import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  headerStatus: 'home',
  locCity: '',
  curCity: ''
}

const mutations = {
  UPDATE_HeaderStatus (state, status) {
    state.headerStatus = status
  },
  UPDATE_LocCity (state, status) {
    state.locCity = status
  },
  UPDATE_CurCity (state, status) {
    state.curCity = status
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
