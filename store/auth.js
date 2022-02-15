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
    SET_USER(state, data) {
      state.user = token
    },
  },
  actions: {
    async loginUser({ dispatch }, credentials) {
      const response = await this.$axios.$post(
        '/api/v1/slate/user/login-user',
        credentials
      )
      console.log(response.data)

      dispatch('validateToken', response)
    },

    async validateToken({ commit }, token) {
      commit('SET_TOKEN', token)

      try {
        let response = this.$axios.get('auth/me')
        commit('SET_USER', response)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
