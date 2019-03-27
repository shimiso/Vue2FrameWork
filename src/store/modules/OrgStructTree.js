import  api  from '@/libs/axiosUtils'
const state = {
  orgStruct:[]
}
const mutations = {
  getOrgStruct(state,playload){
    state.orgStruct = playload
  }
}
const actions = {
  getOrgStruct({commit}){
    //获取组织结构，调取接口
    api.post('/orgStruct',{}).then((resolve) => {
      if(resolve.data.success){
        commit('getOrgStruct',resolve.data.result.structList)
      }

    }).catch((reject) => {
      state.orgStruct = []
    })
  }
}
const getters = {
  getOrgStruct(state){
    return state.orgStruct
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
