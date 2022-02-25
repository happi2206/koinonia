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
}
</script>

<style>
</style>