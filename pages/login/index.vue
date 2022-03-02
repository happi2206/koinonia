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
            <!-- <div class="absolutecontainer absolutes absolute5">
              <img src="images/man2.png" alt="" class="img-fluid" />
            </div> -->
          </div>
        </div>
        <div class="col-lg-5">
          <div class="">
            <div class="mt-5">
              <h2 class="brownheader text-center">Log in</h2>

              <p class="brownparagraph text-center">Sign into Koinonia</p>

              <div class="mt-3">
                <div>
                  <div class="d-flex justify-content-center">
                    <div class="d-flex">
                      <div
                        class="
                          whitelogocontainer
                          d-flex
                          justify-content-center
                          align-items-center
                          mx-2
                          p-3
                        "
                      >
                        <a href="#">
                          <img
                            src="~/assets/images/googleicon.png"
                            alt=""
                            class="img-fluid"
                        /></a>
                      </div>
                      <div
                        class="
                          whitelogocontainer
                          d-flex
                          justify-content-center
                          align-items-center
                          mx-2
                          p-3
                        "
                      >
                        <a href="#">
                          <img
                            src="~/assets/images/twittericon.png"
                            alt=""
                            class="img-fluid"
                        /></a>
                      </div>
                      <div
                        class="
                          whitelogocontainer
                          d-flex
                          justify-content-center
                          align-items-center
                          mx-2
                          p-3
                        "
                      >
                        <a href="#">
                          <img
                            src="~/assets/images/linkedinicon.png"
                            alt=""
                            class="img-fluid"
                        /></a>
                      </div>
                      <div
                        class="
                          whitelogocontainer
                          d-flex
                          justify-content-center
                          align-items-center
                          mx-2
                          p-3
                        "
                      >
                        <a href="#">
                          <img
                            src="~/assets/images/facebookicon.png"
                            alt=""
                            class="img-fluid"
                        /></a>
                      </div>
                    </div>
                  </div>

                  <div class="px-sm-5 px-3">
                    <div class="my-4 px-md-5">
                      <p class="medbrownparagraph text-center">Or</p>

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
                              v-model="loginInputs.username"
                              required
                              placeholder="Email"
                              class="forminputs"
                            />
                          </div>
                          <div class="my-4 relativecontainer">
                            <label
                              for=""
                              class="d-block medbrownparagraph graytext"
                              >Choose a password</label
                            >
                            <input
                              type="password"
                              v-model="loginInputs.password"
                              required
                              placeholder="********"
                              class="forminputs"
                            />
                            <span
                              toggle="#password-field"
                              class="lightgraytext absolutecontainer eyeicon"
                            >
                              <!-- <Icon
                                  icon="el:eye-open"
                                  width="20"
                                  height="20"
                              /> -->
                            </span>
                          </div>

                          <div class="my-4">
                            <div class="form-check">
                              <label class="form-check-label medbrownparagraph">
                                <input
                                  type="checkbox"
                                  required
                                  class="form-check-input"
                                  value="checkedValue"
                                  checked
                                />

                                Keep me signed in
                              </label>
                            </div>
                          </div>

                          <button
                            class="subscribebtn btn rad6 btn mt-3 py-3"
                            :disabled="is_login"
                          >
                            <span v-if="is_login">
                              <b-spinner small variant="light"></b-spinner>
                              Please wait...</span
                            >
                            <span v-else>Login</span>
                          </button>
                        </div>
                      </form>

                      <div class="my-4 d-flex justify-content-center">
                        <nuxt-link
                          to="/forgot-password"
                          class="mb-0 medbrownparagraph text-center"
                        >
                          <u>Forgot Password?</u>
                        </nuxt-link>
                      </div>
                      <div class="my-4 d-flex justify-content-center">
                        <p class="medparagraph mx-2">
                          Don’t have an account?
                          <nuxt-link to="/register" class="mb-0">
                            <u>Sign up</u>
                          </nuxt-link>
                        </p>
                      </div>
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
      loginInputs: {
        username: '',
        password: '',
      },
      is_login: false,
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/loginUser',
    }),
    async loginUser() {
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

<style></style>
