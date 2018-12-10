import _ from 'lodash'

const UI = {
  LOWER_SIDEBAR: 'LOWER_SIDEBAR'
}

const initialState = {
  lowerSidebar: { // 二级侧边栏
    show: false
  }
}

const mutations = {
  [UI.LOWER_SIDEBAR] (state, payload) {
    state.lowerSidebar = {
      ...state.lowerSidebar,
      ...payload
    }
  }
}

const actions = {
  changeLowerSidebar ({ commit }, payload) {
    commit(UI.LOWER_SIDEBAR, payload)
  }
}

const getters = {}

export default {
  state: _.cloneDeep(initialState),
  mutations,
  actions,
  getters
}
