<template>
  <nav
    id="sidebar"
    class="sidebar-wrapper bg-white d-none d-lg-block mt-5 pt-5"
  >
    <div class="sidebar-menu my-2" v-if="isInstructor">
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <h2 class="largebrownparagraph">Instructor Dashboard</h2>
      </li>
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <nuxt-link
          to="/dashboard/assignment"
          class="text-dark"
          active-class="active"
        >
          <span class="medbrownparagraph">Assignment </span>
        </nuxt-link>
      </li>
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <nuxt-link
          to="/dashboard/instructors"
          class="text-dark"
          active-class="active"
        >
          <span class="medbrownparagraph">Instructors </span>
        </nuxt-link>
      </li>
    </div>
    <div class="sidebar-menu my-2" v-if="isAdministrator">
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <span class="largebrownparagraph">Administrator Dashboard </span>
      </li>
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <nuxt-link to="/dashboard/courses" class="text-dark">
          <span class="medbrownparagraph">Courses </span>
        </nuxt-link>
      </li>

      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <a href="" class="text-dark">
          <nuxt-link
            active-class="active"
            to="/dashboard/allUsers"
            class="text-dark medbrownparagraph"
          >
            Users
          </nuxt-link>
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

      routes: [],
    }
  },
  mounted() {
    const user = this.$store.state.auth.user
    this.isAdministrator = user.is_administrator
    this.isInstructor = user.is_instructor
  },
}
</script>

<style scoped>
/* .nuxt-link-active {
  background: #ffcd0624;
  margin: 10px;
  border-radius: 10px;
} */

.nuxt-link-active {
  background: #ffcd0624 !important;
  padding: 10px 10px;
  border-radius: 5px;
}
</style>