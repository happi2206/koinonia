<template>
  <div class="">
    <login-nav />

    <side-bar />

    <main class="page-content mt-0 height">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  components: {},
  mounted() {
    // if (localStorage.getItem('reloaded')) {
    //   // The page was just reloaded. Clear the value from local storage
    //   // so that it will reload the next time this page is visited.
    //   localStorage.removeItem('reloaded')
    // } else {
    //   // Set a flag so that we know not to reload the page twice.
    //   localStorage.setItem('reloaded', '1')
    //   location.reload()
    // }
  },
}
</script>

<style>
</style>