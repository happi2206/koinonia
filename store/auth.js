export default {
  namespaced: true,
  state: () => ({
    token: '',
    user: null,
  }),

  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    },
  },
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
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
        this.$toast.error(error)
        return Promise.reject(error)
      }
    },

    signOut({ commit }) {
      return this.$axios.$post('auth/signout').then(() => {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      })
    },
  },
}

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   loggedIn(state) {
//     return state.auth.user
//   },
// }
