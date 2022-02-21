<template>
  <div class="mt-lg-5 horizontalspacing pt-lg-5">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="text-4xl mb-0">Users</h2>
    </div>

    <div class="mt-2">
      <div class="card p-5 bg-white rounded">
        <table-component
          :items="userdetails"
          :fields="fields"
          :dropdownItem="dropdownItem"
          @Share_Link_Code="shareLinkCode"
        />
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
      dropdownItem: ['Share_Link_Code'],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'other_name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'dots', label: 'Action', sortable: true },
      ],
      userdetails: [],
    }
  },

  mounted() {
    this.getUsers()
  },

  methods: {
    async shareLinkCode(e) {
      try {
        await this.$axios.$post(
          `admin-v/generate-instructor-invite-code?user_id=${e.id}`
        )

        this.$toast.success('Linked Successfully')
      } catch (e) {
        console.log(e)
      }

      console.log(e)
    },
    async getUsers() {
      const users = await this.$axios.$get(
        `admin-v/get-all-register-users?page=1&size=50`
      )

      this.userdetails.push(...users.items)
      console.log('users', users.items)
    },
  },
}
</script>

<style>
</style>