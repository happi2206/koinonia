import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    token: null,
    user: null,
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
  },
  actions: {
    async loginUser({ dispatch }, credentials) {
      const response = await $axios.$post(
        '/api/v1/slate/user/login-user',
        credentials
      )
      console.log(response.data)

      dispatch('validateToken', response)
    },

    async validateToken({ commit }, token) {
      commit('SET_TOKEN', token)

      try {
        let response = $axios.get('auth/me')
        commit('SET_USER', response)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
