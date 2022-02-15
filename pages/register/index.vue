<template>
  <div>
    <b-overlay :show="preloader" rounded="sm">
      <main class="">
        <login-nav />
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
          <div class="col-lg-6">
            <div class="">
              <div class="mt-5">
                <h2 class="brownheader text-center">
                  Register Individual Account!
                </h2>

                <p class="brownparagraph text-center">
                  Your details are required
                </p>

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

                        <form @submit.prevent="registerUser">
                          <div class="my-3 px-2">
                            <div class="my-4">
                              <label
                                for=""
                                class="d-block medbrownparagraph graytext"
                                >First Name</label
                              >
                              <input
                                type="text"
                                v-model="registerInputs.other_name"
                                required
                                placeholder="Email"
                                class="forminputs"
                              />
                            </div>
                            <div class="my-4">
                              <label
                                for=""
                                class="d-block medbrownparagraph graytext"
                                >Last Name</label
                              >
                              <input
                                type="text"
                                v-model="registerInputs.surname"
                                required
                                placeholder="Doe"
                                class="forminputs"
                              />
                            </div>
                            <div class="my-4">
                              <label
                                for=""
                                class="d-block medbrownparagraph graytext"
                                >Email address</label
                              >
                              <input
                                type="email"
                                v-model="registerInputs.user_type.email"
                                required
                                placeholder="Email"
                                class="forminputs"
                              />
                            </div>
                            <div class="my-4 relativecontainer">
                              <label
                                for=""
                                class="d-block medbrownparagraph graytext"
                                >Create password</label
                              >
                              <input
                                type="password"
                                v-model="registerInputs.user_type.password"
                                required
                                placeholder="********"
                                class="forminputs"
                              />
                              <span
                                toggle="#password-field"
                                class="lightgraytext absolutecontainer eyeicon"
                                ><span
                                  class="iconify"
                                  data-icon="el:eye-open"
                                  data-width="20"
                                  data-height="20"
                                ></span
                              ></span>
                            </div>

                            <div class="my-4">
                              <div class="form-check">
                                <label
                                  class="form-check-label medbrownparagraph"
                                >
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    required
                                    v-model="legal_check"
                                  />

                                  I agree to

                                  <nuxt-link to="/" class="mb-0 py-2"
                                    >terms & conditions</nuxt-link
                                  >
                                </label>
                              </div>
                            </div>
                            <div class="my-4">
                              <div class="form-check">
                                <label
                                  class="form-check-label medbrownparagraph"
                                >
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    v-model="
                                      registerInputs.send_lastest_updates
                                    "
                                    checked
                                  />
                                  I’d like being informed about latest news and
                                  tips
                                </label>
                              </div>
                            </div>

                            <input
                              class="subscribebtn rad6 btn mt-3 py-3"
                              value="Register"
                              type="submit"
                            />
                          </div>
                        </form>

                        <div class="my-4 d-flex justify-content-center">
                          <p class="medparagraph mx-2">
                            Do you already have an account?

                            <nuxt-link to="/login" class="mb-0 py-2">
                              Log in
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
    </b-overlay>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      registerInputs: {
        surname: '',
        other_name: '',
        user_type: {
          user_type: 'online_user',
          email: '',
          password: '',
          legal: null,
        },
        send_lastest_updates: true,
      },
      legal_check: false,
      preloader: false,
    }
  },

  methods: {
    async registerUser() {
      try {
        this.preloader = true

        if (this.legal_check) {
          this.registerInputs.user_type.legal = [
            {
              type: 'Term&Condition',
              version: '0.0.1',
              stamp: new Date().toISOString(),
            },
          ]
        }
        let response = await this.$axios.$post(
          `user/register-user?school_id=${process.env.SCHOOL_ID}`,
          this.registerInputs
        )
        this.$router.push('/')

        console.log(response)
      } catch (e) {
        this.$toast.error(e.message)
      } finally {
        this.preloader = false
      }
    },
  },
}
</script>

<style></style>
