<template>
  <div class="mt-md-5 horizontalspacing pt-md-5">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph bold700 mb-0">Instructors</h2>
      <div>
        <button class="btn mainbtn py-2" v-b-modal.addInstructor>
          Add Instructor
        </button>

        <b-modal id="addInstructor" centered hide-header hide-footer>
          <h2 class="brownparagraph bold700 text-center my-3">
            Add Instructor
          </h2>

          <div class="content px-md-5 my-2">
            <v-select
              :options="alluserdetails"
              label="other_name surname"
              :reduce="(option) => option.id"
              @input="sendLinkInput"
            ></v-select>
          </div>

          <div class="d-flex justify-content-center mx-5 my-3">
            <button class="btn mainbtndashboard">Add Instructor</button>
          </div>
        </b-modal>
      </div>
    </div>

    <div class="mt-2">
      <div class="card p-md-5 bg-white rounded">
        <table-component
          :items="userdetails"
          :fields="fields"
          :busy="busy"
          :dropdownItem="dropdownItem"
          @Share_Link_Code="shareLinkCode"
          @Delete_Instructor="handleDelete"
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
      dropdownItem: ['Share_Link_Code', 'Delete_Instructor'],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'other_name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'dots', label: 'Action', sortable: true },
      ],
      userdetails: [],
      alluserdetails: [],
      user: ['sample', 'no'],
      busy: true,
    }
  },

  mounted() {
    this.getUsers()
    this.getAllUsers()
  },

  methods: {
    async sendLinkInput(e) {
      console.log('on change', e)
      try {
        await this.$axios.$post(
          `admin-v/generate-instructor-invite-code?user_id=${e}`
        )

        this.$toast.success('Linked Successfully')
      } catch (e) {
        console.log(e)
      }
    },
    async handleDelete(e) {
      try {
        await this.$axios.delete(`admin-v/delete-user?user_id=${e.id}`)
        this.$fetch()
      } catch (e) {
        console.log(e)
      }
    },

    async shareLinkCode(e) {
      console.log('on change', e)
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
      this.busy = true
      const users = await this.$axios.$get(
        `instructors-v/get-all-instructors?page=1&size=50`
      )

      this.userdetails.push(...users.items)
      console.log('users', users.items)
      this.busy = false
    },
    async getAllUsers() {
      const users = await this.$axios.$get(
        `admin-v/get-all-register-users?page=1&size=50`
      )

      this.alluserdetails.push(...users.items)
      console.log('users', users.items)
    },
  },
}
</script>

<style>
</style>