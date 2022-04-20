<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="
        navz
        justify-content-between
        blacknav
        align-items-center
        navbar-expand-lg
        mobilenavigation
        mx-0
        my-0
        pt-2
        pb-2
        pt-lg-0
        pb-lg-1
        secondaryheader
        darkborderbottom
      "
    >
      <div class="d-block d-lg-none w-65">
        <div class="d-flex justify-content-between align-items-center">
          <div
            class="pr-2"
            @click="$nuxt.$emit('openSidebar')"
            v-if="authenticated"
          >
            <span class="text-white">
              <span
                class="iconify"
                data-icon="heroicons-outline:menu-alt-1"
                data-width="24"
                data-height="24"
              ></span>
            </span>
          </div>

          <div class="d-block d-lg-none mr-3">
            <nuxt-link
              to="/"
              class="
                navbar-brand
                logo-icon-mobile
                pr-2
                mr-2
                logoplaceholder
                d-flex
                align-items-center
              "
              href="#"
            >
              <span class="mb-0 medbrownparagraphlogo text-white"> KSOM</span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="d-block d-lg-none" v-if="authenticated">
          <div class="d-lg-flex align-items-lg-center">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              class="p-0 menudropdown"
              no-caret
            >
              <template #button-content>
                <div class="d-flex align-items-center medparagraph">
                  <div class="profimgfull d-block d-lg-none">
                    <b-avatar variant="warning" class="mr-1"></b-avatar>
                  </div>
                </div>
              </template>
              <b-dropdown-item class="medparagraph" v-if="!isAdministrator">
                <nuxt-link to="/myLearning" class="text-dark">
                  My learning
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item
                class="medparagraph"
                v-if="isAdministrator || isInstructor"
              >
                <nuxt-link to="/dashboard/all-courses" class="text-dark">
                  Instructors dashboard
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="medparagraph">
                <nuxt-link to="/account-settings" class="text-dark">
                  Account Settings
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item
                class="medparagraph"
                v-if="!isAdministrator && !isInstructor"
                @click.prevent="linkInstructor"
              >
                Link an Instructor
              </b-dropdown-item>
              <b-dropdown-item
                class="medparagraph"
                v-if="isAdministrator"
                @click.prevent="linkAdmin"
              >
                Link to an Administrator
              </b-dropdown-item>
              <b-dropdown-item
                class="medparagraph"
                @click.prevent="linkToContent"
                v-if="!isAdministrator"
              >
                Link a Course
              </b-dropdown-item>
              <b-dropdown-item @click="signOut" class="medparagraph">
                Logout
              </b-dropdown-item>
            </b-dropdown>

            <div>
              <b-modal id="link" centered hide-header hide-footer>
                <form @submit.prevent="linkToAcourse">
                  <h2 class="brownparagraph bold700 my-3">Link a course</h2>
                  <div class="content px-1">
                    <input
                      type="text"
                      class="forminputs"
                      placeholder="enter code"
                      v-model="linkcode"
                    />
                  </div>

                  <div class="d-flex justify-content-center w-full my-2">
                    <button class="btn py-2 rounded subscribebtn">
                      <span v-if="isbusy">
                        <b-spinner
                          label="loading"
                          variant="primary"
                          style="width: 1.5rem; height: 1.5rem"
                          class="text-center"
                        >
                        </b-spinner>
                      </span>
                      <span v-else>Link</span>
                    </button>
                  </div>
                </form>
              </b-modal>
              <b-modal id="linkInstructor" centered hide-header hide-footer>
                <form @submit.prevent="linkAnInstructor">
                  <h2 class="brownparagraph bold700 my-3">
                    Link an Instructor
                  </h2>
                  <div class="content px-1">
                    <input
                      type="text"
                      class="forminputs"
                      placeholder="enter code"
                      v-model="linkcode4"
                    />
                  </div>

                  <div class="d-flex justify-content-center w-full my-2">
                    <button class="btn py-2 rounded subscribebtn">
                      <span v-if="isbusy">
                        <b-spinner
                          label="loading"
                          variant="primary"
                          style="width: 1.5rem; height: 1.5rem"
                          class="text-center"
                        >
                        </b-spinner>
                      </span>
                      <span v-else>Link</span>
                    </button>
                  </div>
                </form>
              </b-modal>
              <b-modal id="linkAdmin" centered hide-header hide-footer>
                <form @submit.prevent="linkAnAdministrator">
                  <h2 class="brownparagraph bold700 my-3">
                    Link an Administrator
                  </h2>
                  <div class="content px-1">
                    <input
                      type="text"
                      class="forminputs"
                      placeholder="enter code"
                      v-model="linkcodeAdmin"
                    />
                  </div>

                  <div class="d-flex justify-content-center w-full my-2">
                    <button class="btn py-2 rounded subscribebtn">
                      <span v-if="isbusy">
                        <b-spinner
                          label="loading"
                          variant="primary"
                          style="width: 1.5rem; height: 1.5rem"
                          class="text-center"
                        >
                        </b-spinner>
                      </span>
                      <span v-else>Link</span>
                    </button>
                  </div>
                </form>
              </b-modal>
            </div>
          </div>
        </div>
        <!-- <b-navbar-toggle
          target="nav-collapse"
          class="text-white border-none p-0 border-0"
          v-if="authenticated"
        >
          <b-icon icon="list" class="text-white"></b-icon>
        </b-navbar-toggle> -->

        <div class="d-lg-none d-flex" v-if="!authenticated">
          <button
            class="
              btn
              loginbtndashboard
              px-lg-4 px-3
              py-lg-2 py-1
              text-white
              mx-lg-2 mx-1
            "
          >
            <nuxt-link
              to="/login"
              class="mb-0 text-white medparagraph text-center"
            >
              Log in
            </nuxt-link>
          </button>
          <button class="btn mainbtn px-lg-4 px-3 py-lg-2 py-1 mx-lg-2 mx-1">
            <nuxt-link
              to="/register"
              class="mb-0 text-white medparagraph text-center"
            >
              Sign Up
            </nuxt-link>
          </button>
        </div>
      </div>
      <b-collapse id="nav-collapse" is-nav class="mx-2 py-2">
        <div
          class="
            d-flex
            flex-column
            align-items-center
            flex-lg-row
            justify-content-lg-between
            w-100
            navigationflexspacing
          "
        >
          <div class="firstcontent d-none d-lg-block">
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <nuxt-link
                to="/"
                class="
                  navbar-brand
                  logo-icon-mobile
                  pr-2
                  mr-2
                  logoplaceholder
                  d-flex
                  align-items-center
                "
                href="#"
              >
                <span class="mb-0 medbrownparagraphlogo text-white">
                  KOINO<span class="goldcolor">NIA</span></span
                >
              </nuxt-link>
            </div>
          </div>

          <div class="d-flex flex-column flex-lg-row align-items-center">
            <ul class="thirdcontent d-flex align-items-center mb-0">
              <div v-if="authenticated" class="d-flex">
                <li
                  class="nav-item mb-0 mx-2"
                  v-if="isAdministrator || isInstructor"
                >
                  <nuxt-link
                    to="/dashboard/all-courses"
                    class="nav-link text-white dashboardlink mb-0"
                  >
                    Instructors dashboard
                  </nuxt-link>
                </li>
                <li class="nav-item mb-0" v-else>
                  <nuxt-link
                    to="/myLearning"
                    class="nav-link text-white dashboardlink mb-0"
                    v-if="!isAdministrator && !isInstructor"
                  >
                    My learning
                  </nuxt-link>
                </li>
              </div>

              <div v-else class="d-flex">
                <nuxt-link
                  to="/login"
                  class="
                    btn
                    loginbtndashboard
                    px-4
                    py-2
                    text-white
                    mx-2
                    d-none d-lg-block
                    mb-0
                    text-white
                    medparagraph
                    text-center
                  "
                >
                  Login
                </nuxt-link>

                <nuxt-link
                  to="/register"
                  class="
                    mb-0
                    btn
                    px-4
                    py-2
                    mx-2
                    d-none d-lg-block
                    text-white
                    mainbtndashboard
                    medparagraph
                    text-center
                  "
                >
                  Sign Up
                </nuxt-link>
              </div>
            </ul>

            <div class="d-none d-lg-block ml-2" v-if="authenticated">
              <div class="d-lg-flex align-items-lg-center">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  class="p-0 menudropdown"
                  no-caret
                >
                  <template #button-content>
                    <div class="d-flex align-items-center medparagraph">
                      <div class="profimgfull d-none d-lg-block">
                        <b-avatar variant="warning" class="mr-1"></b-avatar>
                      </div>
                    </div>
                  </template>
                  <b-dropdown-item
                    v-if="!isAdministrator"
                    href="#"
                    class="medparagraph"
                  >
                    <nuxt-link to="/myLearning" class="text-dark">
                      My learning
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    v-if="isAdministrator && isInstructor"
                  >
                    <nuxt-link to="/dashboard/all-courses" class="text-dark">
                      Instructors dashboard
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item href="#" class="medparagraph">
                    <nuxt-link to="/account-settings" class="text-dark">
                      Account Settings
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    @click.prevent="linkToContent"
                    v-if="!isAdministrator && !isInstructor"
                  >
                    Link a Course
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    v-if="isAdministrator"
                    @click.prevent="linkAdmin"
                  >
                    Link an Administrator
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    @click.prevent="linkInstructor"
                    v-if="!isInstructor && !isAdministrator"
                  >
                    Link an Instructor
                  </b-dropdown-item>
                  <b-dropdown-item
                    @click="signOut"
                    href="#"
                    class="medparagraph"
                  >
                    Logout
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'loginnavbar',
  data() {
    return {
      titlecontent: '',
      isMobile: false,
      firstLetter: '',
      lastLetter: '',
      linkcode: '',
      linkcode4: '',
      linkcodeAdmin: '',
      isbusy: false,
      isAdministrator: false,
      isInstructor: false,
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    user() {
      return this.$store.state.auth.user
    },

    userFirstName() {},

    // isAdministrator() {
    //   return this.user.is_administrator
    // },
    // isInstructor() {
    //   return this.user.is_instructor
    // },

    isSignIn() {
      if (this.$nuxt.$route.name == 'login') {
        return false
      }
      return true
    },
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut',
    }),
    async signOut() {
      await this.signOutAction()
      this.$router.push({ path: '/' })
    },

    linkToContent() {
      this.$bvModal.show('link')

      if (this.user.is_instructor) {
        this.titlecontent = 'Instructor'
      }
      if (this.user.is_administrator) {
        this.titlecontent = 'Administrator'
      }
    },
    linkInstructor() {
      this.$bvModal.show('linkInstructor')

      if (this.user.is_instructor) {
        this.titlecontent = 'Instructor'
      }
      if (this.user.is_administrator) {
        this.titlecontent = 'Administrator'
      }
    },
    linkAdmin() {
      this.$bvModal.show('linkAdmin')

      if (!this.user.is_instructor) {
        this.titlecontent = 'Instructor'
      }
      if (!this.user.is_administrator) {
        this.titlecontent = 'Administrator'
      }
    },

    async linkToAcourse() {
      try {
        this.isbusy = true
        let response = await this.$axios.post(
          `user/connect-to-an-student-using-link-code?invite_code=${this.linkcode}`
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        console.log(error)
        this.$toast.error(error.data.detail.message)
      } finally {
        this.isbusy = false
        this.$bvModal.hide('link')
      }
    },
    async linkAnInstructor() {
      try {
        this.isbusy = true
        let response = await this.$axios.post(
          `user/connect-to-an-instructor-using-link-code?invite_code=${this.linkcode4}`
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        console.log(error)
        this.$toast.error(error.data.detail.message)
      } finally {
        this.isbusy = false
        this.$bvModal.hide('linkInstructor')
      }
    },
    async linkAnAdministrator() {
      try {
        this.isbusy = true
        let response = await this.$axios.post(
          `user/connect-to-an-administrator-using-link-code?invite_code=${this.linkcodeAdmin}`
        )

        this.$toast.success(response.data.message)
      } catch (error) {
        console.log(error)
        this.$toast.error(error.data.detail.message)
      } finally {
        this.isbusy = false
        this.$bvModal.hide('linkAdmin')
      }
    },
  },
  mounted() {
    if (this.$store.state.auth.user) {
      try {
        const user = this.$store.state.auth.user
        this.isAdministrator = user.is_administrator
        this.isInstructor = user.is_instructor
      } catch (e) {
        console.log(e)
      }
    }
  },
}
</script>

<style scoped>
.w-65 {
  width: 65%;
}
</style>