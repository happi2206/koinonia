<template>
  <div class="mt-5 horizontalspacing pt-3">
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph bold700 mb-0">Instructors</h2>
      <div>
        <button class="btn mainbtn py-2" v-b-modal.addInstructor>
          Add Instructor
        </button>

        <b-modal id="addInstructor" centered title="Add Instructor" hide-footer>
          <preloader :show="preloader_main" />
          <form class="modabody px-3" @submit.prevent="addInstructor">
            <div class="my-2">
              <label for="" class="d-block medbrownparagraph graytext"
                >Instructors First Name
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
        <filter-component @search="searchTable">
          <table-component
            :items="userdetails"
            :fields="fields"
            @page-changed="handlePage"
            :perPage="perPage"
            :totalItems="totalItems"
            :busy="busy"
            :dropdownItem="dropdownItem"
            @Share_Link_Code="shareLinkCode"
            @Delete_Instructor="handleDelete"
          >
          </table-component>
        </filter-component>
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
        { key: 'other_name', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'link_code', sortable: true },
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
      search: '',
      perPage: 50,
      totalItems: 0,
      currentPage: 1,
      preloader_main: false,
    }
  },

  mounted() {
    // this.getUsers()
    this.getAllInstructors()
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
        this.getAllInstructors()
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
        this.preloader_main = true
        let payload = {
          surname: this.instructor.surname,
          other_name: this.instructor.other_name,
          phone: this.instructor.phone,
          send_lastest_updates: false,
          user_type: {
            user_type: 'flat_user',
            type: 'instructor',
            email: this.instructor.email,
          },
        }
        const users = await this.$axios.$post(
          `admin/create-an-instructor`,
          payload
        )
        this.userdetails = users.items.reverse()
        this.perPage = users.size
        this.totalItems = users.total
        this.currentPage = users.page
        this.$bvModal.hide('addInstructor')
        this.$toast.success('Admin created Successfully')
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.preloader_main = false
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
    async getAllInstructors() {
      try {
        this.busy = true
        let uri = `instructors-v/get-all-instructors?page=${this.currentPage}&size=${this.perPage}`
        if (this.search) {
          uri = uri + `&search=${this.search}`
        }
        const users = await this.$axios.$get(uri)
        this.userdetails = users.items.reverse()
        this.perPage = users.size
        this.totalItems = users.total
        this.currentPage = users.page
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.busy = false
      }
    },
    // searchtable
    searchTable(payload) {
      this.search = payload
      this.getAllInstructors()
    },
    // handle page
    handlePage(e) {
      this.currentPage = e
      this.getAllInstructors()
    },
  },
}
</script>

<style>
</style>