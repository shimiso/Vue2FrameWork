import api from '@/libs/axiosUtils'
import {orgStructList} from '@/mock/orgStructList'

const state = {
  orgStruct: []
}
const mutations = {
  getOrgStruct (state, playload) {
    state.orgStruct = playload
  }
}
const actions = {
  getOrgStruct ({commit}) {
    // 获取组织结构，调取接口
    commit('getOrgStruct', orgStructList)
    /* api.post('/orgStruct', {}).then((resolve) => {
      if (resolve.data.success) {
        console.log(resolve.data.result.structList)
        commit('getOrgStruct', resolve.data.result.structList)
      }
    }).catch((reject) => {
      state.orgStruct = []
    }) */
  }
}
const getters = {
  getOrgStruct (state) {
    return state.orgStruct
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
