import _ from 'lodash'

const USER = {
  SET_USER: 'SET_USER'
}

const initialState = {
  user: {}
}

const mutations = {
  [USER.SET_USER] (state, user) {
    state.user = user
  }
}

const actions = {
  changeUserInfo ({ commit }, payload) {
    commit(USER.SET_USER, payload)
  }
}

const getters = {}

export default {
  state: _.cloneDeep(initialState),
  mutations,
  actions,
  getters
}
