<template>
  <div class="">
    <login-nav />

    <side-bar>
      <!-- <template #contentheader> Instructor Dashboard </template>
      <template #contentactive> Courses</template>
      <template #content> Instructors</template>
      <template #conten> Users</template> -->
    </side-bar>

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