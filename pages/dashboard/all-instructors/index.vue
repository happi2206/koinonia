<template>
  <div class="mt-5 horizontalspacing pt-3">
    <preloader :show="addPreloader" />
    <div class="d-flex align-items-center pt-5 justify-content-between mb-4">
      <h2 class="largebrownparagraph bold700 mb-0">Instructors</h2>
      <div>
        <button
          class="btn mainbtn py-2 medbrownparagraph"
          v-b-modal.addInstructor
        >
          Add Instructor
        </button>

        <b-modal id="addInstructor" centered title="Add Instructor" hide-footer>
          <preloader :show="preloader_main" />
          <div>
            <ValidationObserver v-slot="{ validate }">
              <form class="modabody px-3">
                <div class="my-2">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Instructors First Name
                  </label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      type="text"
                      v-model="instructor.firstname"
                      placeholder="e.g Name"
                      class="forminputs"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="my-2">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Instructors Middle Name
                  </label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      type="text"
                      v-model="instructor.middlename"
                      placeholder="e.g Name"
                      class="forminputs"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="my-2">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Instructors Surname
                  </label>
                  <validation-provider rules="required" v-slot="{ errors }">
                    <input
                      type="text"
                      v-model="instructor.surname"
                      placeholder="e.g Daniel"
                      class="forminputs"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="my-2">
                  <label for="" class="d-block medbrownparagraph graytext"
                    >Email
                  </label>
                  <validation-provider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <input
                      type="email"
                      v-model="instructor.email"
                      placeholder="e.g john@gmail.com"
                      class="forminputs"
                    />
                    <span class="text-12" style="color: red">{{
                      errors[0]
                    }}</span>
                  </validation-provider>
                </div>
                <div class="my-2">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="" class="d-block medbrownparagraph graytext"
                        >Phone
                      </label>
                      <validation-provider
                        rules="required|digits"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          v-model="instructor.phone"
                          placeholder="e.g 08032644455"
                          class="forminputs text-dark"
                        />
                        <span class="text-12" style="color: red">{{
                          errors[0]
                        }}</span>
                      </validation-provider>
                    </div>
                  </div>
                </div>

                <div class="my-4">
                  <div
                    @click.prevent="onSubmit"
                    class="flex gap-3 justify-content-center"
                  >
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
                  <div
                    type="button"
                    ref="runValidation"
                    id="runValidation"
                    @click="validate"
                  ></div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </b-modal>

        <b-modal
          id="editInstructor"
          title="Edit Instructor"
          v-b-modal.editModal
          centered
          hide-footer
        >
          <ValidationObserver v-slot="{ validate }">
            <form class="modabody px-4 pb-4">
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Last Name
                </label>
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    required
                    v-model="temp_instructor.surname"
                    placeholder="Surname"
                    class="forminputs text-dark"
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Name
                </label>
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    v-model="temp_instructor.firstname"
                    required
                    placeholder="First name"
                    class="forminputs text-dark"
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Middle Name
                </label>
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    required
                    v-model="temp_instructor.middlename"
                    placeholder="Middle Name"
                    class="forminputs text-dark"
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div>
                <label for="" class="d-block medbrownparagraph graytext"
                  >Email
                </label>
                <validation-provider rules="required|email" v-slot="{ errors }">
                  <input
                    type="email"
                    v-model="temp_instructor.email"
                    required
                    placeholder="Email"
                    class="forminputs text-dark"
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div class="my-4">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Phone Number
                </label>
                <validation-provider
                  rules="required|digits"
                  v-slot="{ errors }"
                >
                  <input
                    type="digit"
                    required
                    v-model="temp_instructor.phone"
                    placeholder="Phone Number"
                    class="forminputs text-dark"
                  />
                  <span class="text-12" style="color: red">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>

              <div class="my-4">
                <div class="d-flex justify-content-center">
                  <button
                    @click.prevent="updateInstructor"
                    class="btn px-md-4 px-5 mainbtndashboard medbrownparagraph"
                    style="width: 180px; text-align: center; height: 2.5rem"
                  >
                    <span v-if="isbusy">
                      <b-spinner
                        label="loading"
                        variant="primary"
                        style="width: 1.5rem; height: 1.5rem"
                        class="text-center"
                      >
                      </b-spinner>
                    </span>
                    <span v-else> Update Instructor </span>
                  </button>
                </div>
                <div
                  type="button"
                  ref="runValidation"
                  id="runValidation"
                  @click="validate"
                ></div>
              </div>
            </form>
          </ValidationObserver>
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
            @Edit_Instructor="openEditModal"
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
      dropdownItem: ['Share_Link_Code', 'Edit_Instructor'],
      fields: [
        // { key: 'id', sortable: true },
        { key: 'firstname', label: 'First Name', sortable: true },
        { key: 'surname', sortable: true },
        { key: 'middlename', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'link_code', sortable: true },
        { key: 'dots', label: 'Action', sortable: false },
      ],
      addPreloader: false,
      userdetails: [],
      alluserdetails: [],
      user: ['sample', 'no'],
      busy: true,
      isbusy: false,
      instructor_id: '',
      instructor: {
        firstname: '',
        middlename: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
      },

      temp_instructor: {
        email: '',
        firstname: '',
        phone: '',
        middlename: '',
        surname: '',
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
    // async handleDelete(e) {
    //   try {
    //     this.addPreloader = true
    //     let response = await this.$axios.delete(
    //       `admin-v/delete-user?user_id=${e._id}`
    //     )
    //     this.$toast.success(response.data)
    //   } catch (e) {
    //     this.$toast.error(e)
    //   } finally {
    //     this.getAllInstructors()
    //     this.addPreloader = false
    //   }
    // },

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
    async onSubmit() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click()
      }
      if (
        this.instructor.firstname !== '' &&
        this.instructor.middlename !== '' &&
        this.instructor.surname !== '' &&
        this.instructor.phone !== '' &&
        this.instructor.email !== ''
      ) {
        try {
          this.preloader_main = true
          let payload = {
            surname: this.instructor.surname,
            firstname: this.instructor.firstname,
            middlename: this.instructor.middlename,
            phone: this.instructor.phone,
            email: this.instructor.email,
            school_id: process.env.SCHOOL_ID,
          }
          const users = await this.$axios.$post(
            `admin/create-an-instructor`,
            payload
          )
          this.getAllInstructors()
          this.$bvModal.hide('addInstructor')
          this.$toast.success('Instructor created Successfully')
          this.getAllInstructors()
        } catch (e) {
          this.$toast.error(e)
          console.log(e)
        } finally {
          this.preloader_main = false
        }
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
        this.userdetails = users
        // this.perPage = users.size
        // this.totalItems = users.total
        // this.currentPage = users.page
      } catch (error) {
        this.$toast.error(error)
      } finally {
        this.busy = false
      }
    },

    openEditModal(e) {
      this.instructor_id = e._id
      this.temp_instructor.firstname = e.firstname
      this.temp_instructor.email = e.email
      this.temp_instructor.surname = e.surname
      this.temp_instructor.middlename = e.middlename
      this.temp_instructor.phone = e.phone
      this.$bvModal.show('editInstructor')
    },

    async updateInstructor() {
      if (this.$refs.runValidation) {
        this.$refs.runValidation.click()
      }

      if (this.temp_instructor) {
        try {
          this.isbusy = true
          let response = await this.$axios.$patch(
            `course-v/edit-instructor?instructor_id=${this.instructor_id}`,
            this.temp_instructor
          )
          console.log(response)
          this.$toast.success(response.message)
        } catch (error) {
          this.$toast.error(error.message)
        } finally {
          this.getAllInstructors()
          this.isbusy = false
          this.$bvModal.hide('editInstructor')
        }
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
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 0rem 1rem 1rem;
}
</style>