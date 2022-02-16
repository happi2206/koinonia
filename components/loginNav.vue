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
      <b-navbar-toggle target="nav-collapse" class="text-white">
        <!-- <Icon icon="bytesize:menu"/> -->
      </b-navbar-toggle>
    </div>
    <div class="d-flex justify-content-between width100">
      <div class="d-block d-md-none">
        <div class="d-flex align-items-center">
          <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
            <img
              src="~assets/images/blueyellologo.png"
              alt=""
              class="img-fluid"
            />
          </a>
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
          <div class="d-flex align-items-center">
            <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
              <img
                src="~/assets/images/blueyellologo.png"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>
        </div>

        <div class="d-flex align-items-center">
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
                <nuxt-link to="" class="nav-link text-white dashboardlink mb-0">
                  My learning
                </nuxt-link>
              </li>

              <li
                class="nav-item mb-0"
                v-if="user.is_instructor || user.is_administrator"
              >
                <nuxt-link to="" class="nav-link text-white dashboardlink mb-0">
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
            <div class="relativecontainer">
              <span class="text-white"><b-icon icon="bell-fill"></b-icon></span>
              <div class="absolutecontainer online">
                <span class="mainyellowcolor"
                  ><b-icon icon="dot"></b-icon
                ></span>
              </div>
            </div>
          </div>

          <div class="ml-2" v-if="authenticated">
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
                <b-dropdown-item href="#" class="medbrownparagraph"
                  >Edit profile</b-dropdown-item
                >
                <b-dropdown-item
                  @click="signOut"
                  href="#"
                  class="medbrownparagraph"
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'loginnavbar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
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
  },
}
</script>

<style>
</style>