export default {
  namespaced: true,
  state: () => ({
    token: '',
    user: null,
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, data) {
      state.user = data

      console.log('userstate', data)
    },
  },
  actions: {
    async loginUser({ commit }, credentials) {
      try {
        const response = await this.$axios.$post(
          `user/login-user?school_id=${process.env.SCHOOL_ID}`,
          credentials
        )

        commit('SET_TOKEN', response.access_token.accessToken)
        commit('SET_USER', response.user)
        return Promise.resolve(response.user)
      } catch (error) {
        return Promise.reject(error)
        this.$toast.error(error)
      }
    },
  },
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedIn(state) {
    return state.auth.user
  },
}
