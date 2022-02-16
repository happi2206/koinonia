<template>
  <nav
    id="sidebar"
    class="sidebar-wrapper bg-white d-none d-lg-block mt-5 pt-5"
  >
    <div class="sidebar-menu my-2">
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <nuxt-link to="/dashboard/courses" class="text-dark">
          <span class="largebrownparagraph" v-if="isAdministrator"
            >Adminstrator Dashboard
          </span>
          <span class="largebrownparagraph" v-if="isInstructor"
            >Instructor Dashboard
          </span> 
          <p class="largebrownparagraph" v-else>My learning </p>
        </nuxt-link>
      </li>

      <li class="sidebar-dropdown py-1 my-3 px-3 py-2 active">
        <a href="#" class="darkerbluecolor">
          <span class="medbrownparagraph">
            <slot name="contentactive">Public Profile</slot>
          </span>
        </a>
      </li>
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <a href="" class="text-dark">
          <span class="medbrownparagraph">
            <slot name="content">Public Profile</slot>
          </span>
        </a>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isAdministrator: '',
      isInstructor: '',
    }
  },
  mounted() {
    const user = this.$store.state.auth.user
    this.isAdministrator = user.is_administrator
    this.isInstructor = user.is_instructor
  },
}
</script>

<style>
</style>