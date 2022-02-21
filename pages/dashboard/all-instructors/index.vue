<template>
  <div class="mt-lg-5 horizontalspacing pt-lg-5">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph bold700 mb-0">Instructors</h2>
      <div>
        <button class="btn mainbtn py-2" v-b-modal.addInstructor>
          Add Instructor
        </button>

        <b-modal id="addInstructor" centered title="Add Instructor" hide-footer>
          <form class="modabody px-3" @submit.prevent="addInstructor">
            <div class="my-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Instructors Other Name
              </label>
              <input
                type="text"
                v-model="instructor.other_name"
                required
                placeholder="e.g Name"
                class="forminputs"
              />
            </div>
            <div class="my-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Instructors Surname
              </label>
              <input
                type="text"
                v-model="instructor.surname"
                required
                placeholder="e.g Daniel"
                class="forminputs"
              />
            </div>
            <div class="my-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Email
              </label>
              <input
                type="email"
                v-model="instructor.email"
                required
                placeholder="e.g Alchemy"
                class="forminputs"
              />
            </div>
            <div class="my-2">
              <div class="row">
                <div class="col-md-12">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Phone
                  </label>
                  <input
                    type="text"
                    v-model="instructor.phone"
                    required
                    placeholder="e.g 08032644455"
                    class="forminputs text-dark"
                  />
                </div>
              </div>
            </div>

            <div class="my-4">
              <div class="flex gap-3 justify-content-center">
                <input
                  class="
                    btn
                    px-md-4 px-3
                    py-2
                    mainbtndashboard
                    medbrownparagraph
                  "
                  type="submit"
                  value="Create Instructor"
                />
              </div>
            </div>
          </form>
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
        { key: 'other_name', label: 'First Name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'email', sortable: true },
        { key: 'dots', label: 'Action', sortable: false },
      ],
      userdetails: [],
      alluserdetails: [],
      user: ['sample', 'no'],
      busy: true,
      instructor: {
        other_name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
      },
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
    async addInstructor() {
      try {
        let payload = {
          surname: this.instructor.surname,
          other_name: this.instructor.other_name,
          phone: this.instructor.phone,

          send_lastest_updates: false,
          user_type: {
            user_type: 'online_user',
            email: this.instructor.email,
            password: this.instructor.password,
            legal: [
              {
                type: 'y3yy3',
                version: '7464',
                stamp: '2022-02-20T17:10:29.462Z',
              },
            ],
          },
        }

        await this.$axios.$post(
          `admin/create-an-instructor?school_id=${process.env.SCHOOL_ID}`,
          payload
        )
        this.getUsers()
        this.$bvModal.hide('addInstructor')
        this.$toast.success('Linked Successfully')
      } catch (e) {
        console.log(e)
      }
    },
    async getUsers() {
      this.busy = true
      const users = await this.$axios.$get(
        `instructors-v/get-all-instructors?page=1&size=50`
      )

      this.userdetails = users.items

      console.log(users)
      this.busy = false
    },
    async getAllUsers() {
      const users = await this.$axios.$get(
        `admin-v/get-all-register-users?page=1&size=50`
      )

      this.alluserdetails.push(...users.items)
    },
  },
}
</script>

<style>
</style>