<template>
  <div class="">
    <login-nav />

    <side-bar v-if="isInstructor || isAdministrator"> </side-bar>
    <main class="page-content mt-0 mb-5 height">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
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
  components: {},
}
</script>

<style>
.height {
  height: max-content !important;
}
</style>