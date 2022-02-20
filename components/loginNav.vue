<template>
  <b-navbar
    toggleable="md"
    class="
      navz
      darkerbluebg
      align-items-center
      navbar-expand-md
      mobilenavigation
      pt-2
      pb-2
      pt-md-0
      pb-md-1
      secondaryheader
      darkborderbottom
    "
  >
    <div>
      <b-navbar-toggle
        target="nav-collapse"
        class="text-white border-none p-0 border-0"
      >
        <b-icon icon="list" class="text-white"></b-icon>
      </b-navbar-toggle>
    </div>
    <div class="d-flex justify-content-between width100">
      <div class="d-block d-md-none">
        <div class="d-flex align-items-center">
          <nuxt-link to="/" class="navbar-brand logo-icon-mobile pr-2 mr-2">
            <img
              src="~assets/images/blueyellologo.png"
              alt=""
              class="img-fluid"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="d-md-none d-flex" v-if="!authenticated">
        <button
          v-if="isSignIn"
          class="
            btn
            loginbtndashboard
            px-md-4 px-3
            py-md-2 py-1
            text-white
            mx-md-2 mx-1
          "
        >
          <nuxt-link
            to="/login"
            class="mb-0 text-white medbrownparagraph text-center"
          >
            Log in
          </nuxt-link>
        </button>
        <button
          v-else
          class="btn mainbtn px-md-4 px-3 py-md-2 py-1 mx-md-2 mx-1"
        >
          <nuxt-link
            to="/register"
            class="mb-0 text-white medbrownparagraph text-center"
          >
            Sign Up
          </nuxt-link>
        </button>
      </div>
    </div>

    <div class="" v-if="authenticated">
      <div class="relativecontainer d-block d-md-none">
        <span class="text-white"><b-icon icon="bell-fill"></b-icon></span>
        <div class="absolutecontainer online">
          <span class="mainyellowcolor"><b-icon icon="dot"></b-icon></span>
        </div>
      </div>
    </div>

    <div class="d-block d-md-none ml-2" v-if="authenticated">
      <div class="d-md-flex align-items-md-center">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          class="p-0"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center medbrownparagraph">
              <div class="profimgfull d-none d-md-block">
                <b-avatar variant="success"></b-avatar>
              </div>
              <div>
                <span class="mx-2 medbrownparagraph text-white">
                  {{ user.other_name }}
                  {{ user.surname }}
                </span>
              </div>
              <b-icon icon="chevron-compact-down" class="text-white"></b-icon>
            </div>
          </template>
          <b-dropdown-item href="#" class="medbrownparagraph">
            <nuxt-link to="/dashboard/accountsettings"> profile </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item href="#" class="medbrownparagraph">
            <nuxt-link to="/dashboard/accountsettings">
              Account Settings
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item
            href="#"
            class="medbrownparagraph"
            v-if="!user.is_instructor"
            @click.prevent="linkToContent"
          >
            Link as Instructor
          </b-dropdown-item>
          <b-dropdown-item
            href="#"
            class="medbrownparagraph"
            v-if="!user.is_administrator"
            @click.prevent="linkToContent"
          >
            Link as Administrator
          </b-dropdown-item>
          <b-dropdown-item
            href="#"
            class="medbrownparagraph"
            @click.prevent="linkToContent"
            v-else
          >
            Link as Courses
          </b-dropdown-item>
          <b-dropdown-item @click="signOut" href="#" class="medbrownparagraph">
            Logout
          </b-dropdown-item>
        </b-dropdown>

        <div>
          <b-modal id="link" centered hide-header hide-footer>
            <h2 class="brownparagraph bold700 my-3">
              Link as {{ titlecontent }}
            </h2>
            <div class="content px-1">
              <input type="text" class="forminputs" placeholder="enter code" />
            </div>

            <div class="d-flex justify-content-center w-full my-2">
              <button class="btn py-2 rounded subscribebtn">Link</button>
            </div>
          </b-modal>
        </div>
      </div>
    </div>

    <b-collapse id="nav-collapse" is-nav class="horizontalspacing my-3">
      <div
        class="
          d-flex
          flex-column
          align-items-center
          flex-md-row
          justify-content-md-between
          w-100
          navigationflexspacing
        "
      >
        <div class="firstcontent d-none d-md-block">
          <div class="d-flex flex-column flex-md-row align-items-center">
            <nuxt-link
              to="/"
              class="navbar-brand logo-icon-mobile pr-2 mr-2"
              href="#"
            >
              <img
                src="~/assets/images/blueyellologo.png"
                alt=""
                class="img-fluid"
              />
            </nuxt-link>
          </div>
        </div>

        <div class="d-flex flex-column flex-md-row align-items-center">
          <ul
            class="
              thirdcontent
              d-flex
              flex-md-row flex-column
              align-items-center
              mb-0
            "
          >
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
                class="nav-item mb-0"
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
                  d-none d-md-block
                  mb-0
                  text-white
                  medbrownparagraph
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
                  d-none d-md-block
                  text-white
                  mainbtndashboard
                  medbrownparagraph
                  text-center
                "
              >
                Sign Up
              </nuxt-link>
            </div>
          </ul>

          <div class="" v-if="authenticated">
            <div class="relativecontainer d-none d-md-block">
              <span class="text-white"><b-icon icon="bell-fill"></b-icon></span>
              <div class="absolutecontainer online">
                <span class="mainyellowcolor"
                  ><b-icon icon="dot"></b-icon
                ></span>
              </div>
            </div>
          </div>

          <div class="d-none d-md-block ml-2" v-if="authenticated">
            <div class="d-md-flex align-items-md-center">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                class="p-0"
                no-caret
              >
                <template #button-content>
                  <div class="d-flex align-items-center medbrownparagraph">
                    <div class="profimgfull d-none d-md-block">
                      <b-avatar variant="success"></b-avatar>
                    </div>
                    <div>
                      <span class="mx-2 medbrownparagraph text-white">
                        {{ user.other_name }}
                        {{ user.surname }}
                      </span>
                    </div>
                    <b-icon
                      icon="chevron-compact-down"
                      class="text-white"
                    ></b-icon>
                  </div>
                </template>
                <b-dropdown-item href="#" class="medbrownparagraph">
                  <nuxt-link to="/dashboard/accountsettings">
                    profile
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="medbrownparagraph">
                  <nuxt-link to="/dashboard/accountsettings">
                    Account Settings
                  </nuxt-link>
                </b-dropdown-item>
                <b-dropdown-item
                  href="#"
                  class="medbrownparagraph"
                  v-if="!user.is_instructor"
                  @click.prevent="linkToContent"
                >
                  Link as Instructor
                </b-dropdown-item>
                <b-dropdown-item
                  href="#"
                  class="medbrownparagraph"
                  v-if="!user.is_administrator"
                  @click.prevent="linkToContent"
                >
                  Link as Administrator
                </b-dropdown-item>
                <b-dropdown-item
                  href="#"
                  class="medbrownparagraph"
                  @click.prevent="linkToContent"
                  v-else
                >
                  Link as Courses
                </b-dropdown-item>
                <b-dropdown-item
                  @click="signOut"
                  href="#"
                  class="medbrownparagraph"
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
                    <button class="btn py-2 rounded subscribebtn">Link</button>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'loginnavbar',
  data() {
    return {
      titlecontent: '',
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