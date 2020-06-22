import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'
const debug = false // 关闭严格模式
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: debug
})
