<template>
  <div>
    <preloader :show="is_login" />
    <main class="">
      <div class="row verticalspacing">
        <div class="col-lg-6">
          <div class="relativecontainer">
            <div class="absolutecontainer absolutes absolute1">
              <img
                src="~/assets/images/carouselpeople1.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="absolutecontainer absolutes absolute2">
              <img
                src="~/assets/images/carouselpeople2.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="absolutecontainer absolutes absolute3">
              <img
                src="~/assets/images/carouselpeople3.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="absolutecontainer absolutes absolute4">
              <img
                src="~/assets/images/carouselpeople4.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="justify-content-between">
            <div class="arrow-height d-flex">
              <nuxt-link
                to="/"
                class="
                  mb-0
                  brownparagraph
                  bold700
                  mainbluecolor
                  text-center
                  d-flex
                  hack
                "
              >
                <span class="pt-0.5 hack">
                  <span
                    class="iconify"
                    data-icon="bi:arrow-left"
                    data-width="16"
                    data-height="16"
                  ></span>
                </span>
                <span class="ml-2 fix">Back</span>
              </nuxt-link>
            </div>
            <div class="mt-5">
              <h2 class="brownheader text-center">Forgot Password</h2>

              <p class="brownparagraph text-center">
                Enter email associated with the account and we’ll send you a
                link to reset your password
              </p>

              <div class="mt-3">
                <div>
                  <div class="px-sm-5 px-3">
                    <div class="my-4 md-5">
                      <form @submit.prevent="loginUser">
                        <div class="my-3 px-2">
                          <div class="my-4">
                            <label
                              for=""
                              class="d-block medbrownparagraph graytext"
                              >Your email</label
                            >
                            <input
                              type="email"
                              v-model="email"
                              required
                              placeholder="Email"
                              class="forminputs"
                            />
                          </div>
                          <div class="my-4 relativecontainer">
                            <span
                              toggle="#password-field"
                              class="lightgraytext absolutecontainer eyeicon"
                            >
                            </span>
                          </div>

                          <button
                            class="subscribebtn btn rad6 btn mt-3 py-3"
                            :disabled="is_login"
                          >
                            <span v-if="is_login">
                              <b-spinner small variant="light"></b-spinner>
                              Please wait...</span
                            >
                            <span v-else>Send</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  middleware: 'login_auth',
  data() {
    return {
      email: '',
      is_login: false,
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/loginUser',
    }),
    async getPassword() {
      try {
        // set is login
        this.is_login = true
        // call login function
        await this.login(this.loginInputs)
        // redirect user
        this.$router.push('/')
      } catch (e) {
        // show error
        this.$toast.error(e.data.detail)
      } finally {
        // hide preloader
        this.is_login = false
      }
    },
  },
}
</script>

<style>
.arrow-height {
  height: 20vh;
}
.hack {
  height: 18px;
}

@media screen and (max-width: 992px) {
  .arrow-height {
    margin-top: 40px;
    height: 10vh;
  }
  .fix {
    margin-top: 2px;
  }
  p.brownparagraph {
    padding: 0 1rem;
  }
}
</style>
