<template>
  <div>
    <div class="backdropfscreen" @click="openSide" v-show="isMobile"></div>
    <div class="d-block d-md-none" @click="openSide">
      <div class="pt-5 px-3 icontogs">
        <b-icon icon="list" class="text-dark"></b-icon>
      </div>
    </div>
    <nav id="sidebar" class="sidebar-wrapper mt-md-5 pt-md-5" v-if="isMobile">
      <div class="sidebar-menu my-md-2 bg-white">
        <div class="h-full bg-white px-1 absolute" id="sidenavExample">
          <ul class="relative">
            <li class="relative" id="sidenavEx3">
              <nuxt-link
                to="/dashboard/all-courses"
                active-class="active"
                class="
                  flex
                  items-center
                  medbrownparagraph
                  px-md-5 px-2
                  py-md-4 py-2
                  h-12
                  overflow-hidden
                  text-gray-700 text-ellipsis
                  whitespace-nowrap
                  rounded
                  transition
                  duration-300
                  ease-in-out
                  cursor-pointer
                "
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavEx3"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="w-3 h-3 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                  ></path>
                </svg>
                <span>Courses</span>
              </nuxt-link>
            </li>
            <li class="relative" id="sidenavEx3">
              <nuxt-link
                to="/dashboard/all-instructors"
                active-class="active"
                class="
                  flex
                  items-center
                  medbrownparagraph
                  px-md-5 px-2
                  py-md-4 py-2
                  h-12
                  overflow-hidden
                  text-gray-700 text-ellipsis
                  whitespace-nowrap
                  rounded
                  hover:text-gray-900 hover:bg-gray-100
                  transition
                  duration-300
                  ease-in-out
                  cursor-pointer
                "
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavEx3"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="w-3 h-3 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                  ></path>
                </svg>
                <span>Instructors</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav id="sidebar" class="sidebar-wrapper mt-md-5 pt-md-5 d-none d-md-block">
      <div class="sidebar-menu my-md-2 bg-white">
        <div class="h-full bg-white px-1 absolute" id="sidenavExample">
          <ul class="relative">
            <li class="relative" id="sidenavEx3">
              <nuxt-link
                to="/dashboard/all-courses"
                active-class="active"
                class="
                  flex
                  items-center
                  medbrownparagraph
                  px-md-5 px-2
                  py-md-4 py-2
                  h-12
                  overflow-hidden
                  text-gray-700 text-ellipsis
                  whitespace-nowrap
                  rounded
                  hover:text-gray-900 hover:bg-gray-100
                  transition
                  duration-300
                  ease-in-out
                  cursor-pointer
                "
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavEx3"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="w-3 h-3 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                  ></path>
                </svg>
                <span>Courses</span>
              </nuxt-link>
            </li>
            <li class="relative" id="sidenavEx3">
              <nuxt-link
                to="/dashboard/all-instructors"
                active-class="active"
                class="
                  flex
                  items-center
                  medbrownparagraph
                  px-md-5 px-2
                  py-md-4 py-2
                  h-12
                  overflow-hidden
                  text-gray-700 text-ellipsis
                  whitespace-nowrap
                  rounded
                  hover:text-gray-900 hover:bg-gray-100
                  transition
                  duration-300
                  ease-in-out
                  cursor-pointer
                "
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavEx3"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="w-3 h-3 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                  ></path>
                </svg>
                <span>Instructors</span>
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
      isAdministrator: '',
      isInstructor: '',
      currentMenu: null,
      isMobile: false,
    }
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
  mounted() {
    const user = this.$store.state.auth.user
    this.isAdministrator = user.is_administrator
    this.isInstructor = user.is_instructor
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isAdministrator() {
      return user.is_administrator
    },
    isInstructor() {
      return user.is_instructor
    },
  },
}
</script>

<style scoped>
.nuxt-link-active {
  background: #ffcd0624 !important;
  padding: 10px 10px;
  border-radius: 5px;
}

.backdropfscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 996;
  background: #f5f5f524 !important;
}

.icontogs {
  z-index: 999;
}
</style>