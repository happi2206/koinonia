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
      <div class="d-flex justify-content-between width100">
        <div class="d-block d-lg-none">
          <div class="d-flex align-items-center">
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
              <img
                src="~/assets/images/koinoiologo.png"
                alt=""
                class="img-fluid logoimages"
              />
              <span class="mb-0 medbrownparagraph text-white"> KOINONIA</span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="" v-if="authenticated">
          <div class="relativecontainer d-block d-lg-none mx-3">
            <span class="text-white"><b-icon icon="bell-fill"></b-icon></span>
            <div class="absolutecontainer online">
              <span class="mainyellowcolor"><b-icon icon="dot"></b-icon></span>
            </div>
          </div>
        </div>

        <div class="d-block d-lg-none mx-3" v-if="authenticated">
          <div class="d-lg-flex align-items-lg-center">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              class="p-0"
              no-caret
            >
              <template #button-content>
                <div class="d-flex align-items-center medparagraph">
                  <div class="profimgfull d-block d-lg-none">
                    <b-avatar variant="success"></b-avatar>
                  </div>
                  <div>
                    <span class="mx-2 medparagraph text-white">
                      {{ user.other_name }}
                    </span>
                  </div>
                  <b-icon
                    icon="chevron-compact-down"
                    class="text-white"
                  ></b-icon>
                </div>
              </template>
              <b-dropdown-item href="#" class="medparagraph">
                <nuxt-link to="/dashboard/accountsettings"> profile </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item href="#" class="medparagraph">
                <nuxt-link to="/dashboard/accountsettings">
                  Account Settings
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item
                href="#"
                class="medparagraph"
                v-if="!user.is_instructor"
                @click.prevent="linkToContent"
              >
                Link as Instructor
              </b-dropdown-item>
              <b-dropdown-item
                href="#"
                class="medparagraph"
                v-if="!user.is_administrator"
                @click.prevent="linkToContent"
              >
                Link as Administrator
              </b-dropdown-item>
              <b-dropdown-item
                href="#"
                class="medparagraph"
                @click.prevent="linkToContent"
                v-else
              >
                Link as Courses
              </b-dropdown-item>
              <b-dropdown-item @click="signOut" href="#" class="medparagraph">
                Logout
              </b-dropdown-item>
            </b-dropdown>

            <div>
              <b-modal id="link" centered hide-header hide-footer>
                <h2 class="brownparagraph bold700 my-3">
                  Link as {{ titlecontent }}
                </h2>
                <div class="content px-1">
                  <input
                    type="text"
                    class="forminputs"
                    placeholder="enter code"
                  />
                </div>

                <div class="d-flex justify-content-center w-full my-2">
                  <button class="btn py-2 rounded subscribebtn">Link</button>
                </div>
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
                <img
                  src="~/assets/images/koinoiologo.png"
                  alt=""
                  class="img-fluid logoimages"
                />
                <span class="mb-0 medbrownparagraphlogo text-white">
                  KOINONIA</span
                >
              </nuxt-link>
            </div>
          </div>

          <div class="d-flex flex-column flex-lg-row align-items-center">
            <ul class="thirdcontent d-flex align-items-center mb-0">
              <div v-if="authenticated" class="d-flex">
                <li class="nav-item mb-0">
                  <nuxt-link
                    to="/dashboard/all-courses"
                    class="nav-link text-white dashboardlink mb-0"
                  >
                    My learning
                  </nuxt-link>
                </li>

                <li
                  class="nav-item mb-0 mx-2"
                  v-if="user.is_instructor || user.is_administrator"
                >
                  <nuxt-link
                    to="/dashboard/all-courses"
                    class="nav-link text-white dashboardlink mb-0"
                  >
                    Instructors dashboard
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

            <div class="mx-2" v-if="authenticated">
              <div class="relativecontainer d-none d-lg-block">
                <span class="text-white"
                  ><b-icon icon="bell-fill" class="text-white"></b-icon
                ></span>
                <div class="absolutecontainer online">
                  <span class="mainyellowcolor"
                    ><b-icon icon="dot" class="text-white"></b-icon
                  ></span>
                </div>
              </div>
            </div>

            <div class="d-none d-lg-block ml-2" v-if="authenticated">
              <div class="d-lg-flex align-items-lg-center">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  class="p-0"
                  no-caret
                >
                  <template #button-content>
                    <div class="d-flex align-items-center medparagraph">
                      <div class="profimgfull d-none d-lg-block">
                        <b-avatar variant="warning"></b-avatar>
                      </div>
                      <div>
                        <span class="mx-2 medparagraph text-white">
                          {{ user.other_name }}
                        </span>
                      </div>
                      <b-icon
                        icon="chevron-compact-down"
                        class="text-white"
                      ></b-icon>
                    </div>
                  </template>
                  <b-dropdown-item href="#" class="medparagraph">
                    <nuxt-link to="/dashboard/accountsettings">
                      profile
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item href="#" class="medparagraph">
                    <nuxt-link to="/dashboard/accountsettings">
                      Account Settings
                    </nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    v-if="!user.is_instructor"
                    @click.prevent="linkToContent"
                  >
                    Link as Instructor
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    v-if="!user.is_administrator"
                    @click.prevent="linkToContent"
                  >
                    Link as Administrator
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="medparagraph"
                    @click.prevent="linkToContent"
                    v-else
                  >
                    Link as Courses
                  </b-dropdown-item>
                  <b-dropdown-item
                    @click="signOut"
                    href="#"
                    class="medparagraph"
                  >
                    Logout
                  </b-dropdown-item>
                </b-dropdown>

                <div>
                  <b-modal id="link" centered hide-header hide-footer>
                    <h2 class="brownparagraph bold700 my-3">
                      Link as {{ titlecontent }}
                    </h2>
                    <div class="content px-1">
                      <input
                        type="text"
                        class="forminputs"
                        placeholder="enter code"
                      />
                    </div>

                    <div class="d-flex justify-content-center w-full my-2">
                      <button class="btn py-2 rounded subscribebtn">
                        Link
                      </button>
                    </div>
                  </b-modal>
                </div>
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

      if (!this.user.is_instructor) {
        this.titlecontent = 'Instructor'
      }
      if (!this.user.is_administrator) {
        this.titlecontent = 'Administrator'
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

<style>
</style>