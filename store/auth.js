export default {
  namespaced: true,
  state: () => ({
    token: null,
    user: null,
    login_state: false
  }),

  getters: {
    authenticated(state) {
      return state.login_state
    },
    user(state) {
      return state.user
    },
    token(state) {
      return state.token
    },
  },
  mutations: {
    initialiseStore(state) {

      let get_token = localStorage.getItem('KOINONIA-TOKEN'),
        get_state = localStorage.getItem('KOINONIA-LOGIN-STATE'),
        get_user = localStorage.getItem('KOINONIA-USER-DATA')


      // Check if the ID exists
      if (get_token && get_user && get_state) {
        state.token = get_token
        state.login_state = get_state
        state.user = JSON.parse(get_user)
      }
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_STATE(state, login_state) {
      state.login_state = login_state
    },
    SIGN_OUT(state) {
      state.token = null
      state.user = null
      state.login_state = false
      // clear localStorage
      localStorage.clear()
    }
  },
  actions: {
    // login user
    async loginUser({ commit }, credentials) {
      try {
        // making axios request
        const response = await this.$axios.$post(
          `user/login-user?school_id=${process.env.SCHOOL_ID}`,
          credentials
        )
        // successful response
        if (response) {
          localStorage.setItem('KOINONIA-TOKEN', response.access_token.accessToken)
          localStorage.setItem('KOINONIA-USER-DATA', JSON.stringify(response.user))
          localStorage.setItem('KOINONIA-LOGIN-STATE', true)

          commit('SET_TOKEN', response.access_token.accessToken)
          commit('SET_USER', response.user)
          commit('SET_STATE', true)
          return Promise.resolve(true)
        }

      } catch (error) {
        return Promise.reject(error)
      }
    },
    // register user
    async registerUser({ commit }, credentials) {
      try {
        let response = await this.$axios.$post(
          `user/register-user?school_id=${process.env.SCHOOL_ID}`,
          credentials
        )
        // successful response
        if (response) {
          localStorage.setItem('KOINONIA-TOKEN', response.access_token.accessToken)
          localStorage.setItem('KOINONIA-USER-DATA', JSON.stringify(response.user))
          localStorage.setItem('KOINONIA-LOGIN-STATE', true)

          commit('SET_TOKEN', response.access_token.accessToken)
          commit('SET_USER', response.user)
          commit('SET_STATE', true)
          return Promise.resolve(true)
        }

      }
      catch (error) {
        return Promise.reject(error)
      }

    },
    // logout user
    signOut({ commit }) {
      commit('SIGN_OUT')
    },
  },
}


