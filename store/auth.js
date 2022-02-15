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
        console.log(response)

        // commit('SET_USER', response)
      } catch (error) {
        this.$toast.error(error.data.detail)
      }
    },
  },
}

export const getters = {
  isLoggedIn: (state) => !!state.token,
}
