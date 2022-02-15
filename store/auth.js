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
      try {
        const response = await this.$axios.$post(
          `/api/v1/slate/user/login-user?school_id=${process.env.SCHOOL_ID}`,
          credentials
        )
        console.log('token', response.access_token.accessToken)
        console.log('data', response.access_token)
        console.log('response', response)

        commit('SET_TOKEN', response.access_token.accessToken)
        commit('SET_USER', response.user)
      } catch (error) {
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
