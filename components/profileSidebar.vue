<template>
  <div>
    <div class="backdropfscreen" @click="openSide" v-show="isMobile"></div>

    <nav id="sidebar" class="sidebar-wrapper mt-5 pt-3" v-if="isMobile">
      <div class="sidebar-menu my-lg-2 bg-white">
        <div class="h-full bg-white px-1 absolute" id="sidenavExample">
          <h4 class="brownparagraph text-center my-3 mx-3"></h4>
          <ul class="relative">
            <li class="py-2 my-2">
              <nuxt-link
                to="/profile-settings"
                class="flex items-center medbrownparagraph text-dark mx-3 px-3"
              >
                <span
                  class="iconify"
                  data-icon="simple-icons:googleclassroom"
                ></span>
                <span class="px-3">Public profile</span>
              </nuxt-link>
            </li>
            <li class="py-2 my-2">
              <nuxt-link
                to="/account-settings"
                class="flex items-center medbrownparagraph text-dark mx-3 px-3"
              >
                <span class="iconify" data-icon="la:chalkboard-teacher"></span>
                <span class="px-3">Account Settings</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav id="sidebar" class="sidebar-wrapper mt-lg-5 pt-lg-5 d-none d-lg-block">
      <div class="sidebar-menu bg-white">
        <div class="h-full px-1 absolute" id="sidenavExample">
          <h4 class="brownparagraph text-center my-3 mx-3"></h4>
          <ul class="relative">
            <li class="py-2 my-2">
              <nuxt-link
                to="/profile-settings"
                class="flex items-center medbrownparagraph text-dark px-3"
              >
                <span
                  class="iconify"
                  data-icon="simple-icons:googleclassroom"
                ></span>
                <span class="ml-2">Public Profile</span>
              </nuxt-link>
            </li>
            <li class="py-2 my-2">
              <nuxt-link
                to="/account-settings"
                class="flex items-center medbrownparagraph text-dark px-3"
              >
                <span class="iconify" data-icon="la:chalkboard-teacher"></span>
                <span class="ml-2">Account Settings</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      currentMenu: null,
      isMobile: false,
    }
  },
  created() {
    this.$nuxt.$on('openSidebar', () => {
      this.isMobile = !this.isMobile
    })
  },
  methods: {
    setCurrentMenu(payload) {
      this.currentMenu == payload
        ? (this.currentMenu = null)
        : (this.currentMenu = payload)
    },
    openSide() {
      this.isMobile = !this.isMobile
      console.log('opened')
    },
  },
  mounted() {},
}
</script>

<style scoped>
.nuxt-link-active {
  background: #ffcd0624 !important;
  padding: 10px 0;
  border-radius: 5px;
}

.backdropfscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 996;
  /* background: RGBA(0, 0, 0, 0.1); */
}

/* .icontogs {
  z-index: 999;
  padding-top: 900px;
} */
</style>