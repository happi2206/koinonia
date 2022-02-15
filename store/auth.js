
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
      try {
        const response = await this.$axios.$post(
          `/api/v1/slate/user/login-user?school_id=${process.env.SCHOOL_ID}`,
          credentials
        )
        print(response)
        // commit('SET_USER', response)
      } catch (error) {
        this.$toast.error(error.data.detail)
      }
    },
  },
}
