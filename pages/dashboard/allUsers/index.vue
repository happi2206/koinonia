<template>
  <div class="mt-5 horizontalspacing pt-md-5">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph mb-0">Users</h2>
    </div>

    <div class="mt-5">
      <div class="card bg-white rounded">
        <table-component :items="userdetails" :fields="fields" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',

  data() {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'email', sortable: true },
        { key: 'other_name', sortable: true },
        { key: 'surname', sortable: true },
      ],
      userdetails: [],
    }
  },

  async fetch() {
    const users = await this.$axios.$get(
      `admin-v/get-all-register-users?page=1&size=50`
    )

    this.userdetails.push(...users.items)
    console.log('users', users.items)
  },
}
</script>

<style>
</style>