<template>
  <div class="bodylightgray2 h-100">
    <div
      class="
        container
        d-flex
        justify-content-center
        align-content-center
        pt-5
        customcard
      "
    >
      <div class="mt-5 py-3">
        <h2 class="roboto24 text-center px-md-5 px-2">Attendance Check-In</h2>
        <b-overlay :show="busy" opacity="1" blur="0" class="bg-white">
          <div class="card-body bg-white p-md-5 p-4 mt-5">
            <strong
              ><h2 class="roboto24 text-center px-md-5 px-2 text-capitalize">
                {{ event.name }}
              </h2></strong
            >
            <p class="biggerparagraph px-md-5 px-2 py-1">
              Please fill in your details accordingly to join<span>
                {{ event.name }}</span
              >
            </p>

            <form class="px-md-5 px-2" @submit.prevent="submitFunction">
              <div class="my-4 py-2">
                <label for="" class="d-block mainparagraph18 graytext"
                  >Surname
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  required
                  v-model="formInputs.surname"
                  placeholder="e.g Nuella"
                  class="forminputs text-dark"
                />
              </div>
              <div class="my-4 py-2">
                <label for="" class="d-block mainparagraph18 graytext"
                  >Registration Number
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  required
                  v-model="formInputs.regNo"
                  placeholder="e.g 072"
                  class="forminputs text-dark"
                />
              </div>

              <div class="my-4 py-2 d-flex justify-content-center">
                <!-- <button class="subscribebtn btn rad6 btn mt-3 py-3" :disabled="is_login">
                            <span v-if="is_login">
                            <b-spinner small  variant="light"></b-spinner>
                              Please wait...</span>
                            <span v-else>Login</span>
                          </button> -->

                <button
                  class="
                    btn-lg btn
                    py-md-3
                    mainbtndashboard
                    biggerparagraph
                    w-100
                    text-center text
                  "
                  ref="submit"
                  type="submit"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading">
                    <b-spinner
                      small
                      label="Small Spinner"
                      variant="dark"
                    ></b-spinner>
                    Checking in...
                  </span>

                  <span v-else>Check in</span>
                </button>
              </div>
            </form>
          </div>

          <template #overlay>
            <div
              ref="dialog"
              tabindex="-1"
              role="dialog"
              aria-modal="false"
              aria-labelledby="form-confirm-label"
              class="
                d-flex
                flex-md-row flex-column-reverse
                justify-content-between
                align-items-center
                p-md-3
              "
            >
              <div
                class="d-flex flex-column align-items-center align-content-end"
                v-if="errorDetail != ''"
              >
                <b-icon
                  icon="x-circle-fill"
                  font-scale="4"
                  class="my-3"
                  variant="danger"
                ></b-icon>
                <strong id="form-confirm-label">
                  <h2 class="text-center roboto24 text-capitalize">
                    {{ errorDetail }}
                  </h2>
                </strong>

                <nuxt-link to="/" class="d-flex mt-5">
                  <span class="iconify" data-icon="bi:arrow-left"></span>
                  <p class="medparagraph text-dark mb-0 mr-3">
                    Go back to Home page
                  </p>
                </nuxt-link>
              </div>
              <div
                class="
                  d-flex
                  flex-column
                  align-items-center align-content-center
                "
                v-else
              >
                <b-icon
                  icon="check-circle-fill"
                  font-scale="3"
                  class="my-3"
                  variant="success"
                ></b-icon>
                <strong id="form-confirm-label">
                  <h2 class="text-center biggerparagraph">
                    Welcome

                    <span class="bold800 text-capitalize">
                      {{ other_name }} {{ surname }}.</span
                    >
                  </h2>
                  <h2 class="text-center biggerparagraph">
                    Your Attendance for
                    {{ event.name }} has been succesfully taken
                  </h2>
                </strong>
                <nuxt-link to="/" class="d-flex mt-5">
                  <span class="iconify" data-icon="bi:arrow-left"></span>
                  <p class="medparagraph text-dark mb-0 mr-3">
                    Go back to Home page
                  </p>
                </nuxt-link>
              </div>
            </div>
          </template>
        </b-overlay>
      </div>
    </div>
  </div>
</template>

<script>
import FingerprintJS from '@fingerprintjs/fingerprintjs'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load()

export default {
  data() {
    return {
      formInputs: {
        surname: '',
        regNo: '',
      },
      busy: false,
      processing: false,
      other_name: '',
      errorDetail: '',
      browser: '',
      isLoading: false,
    }
  },

  methods: {
    async submitFunction() {
      this.processing = false
      const string =
        this.formInputs.surname.charAt(0).toUpperCase() +
        this.formInputs.surname.slice(1)
      this.isLoading = true
      try {
        const response = await this.$axios.$post(
          'course-v/take-attendance-via-qrcode',
          {
            school_id: process.env.SCHOOL_ID,
            surname: string,
            registration_number: 'KSOM/2022/ABUJA/' + this.formInputs.regNo,
            course_id: this.$route.params.course,
            event_id: this.$route.params.event,
            browser: this.browser,
          }
        )

        this.isLoading = false

        this.other_name = response.message.other_name
        this.busy = true
      } catch (e) {
        console.log(e.data.detail.message)
        this.errorDetail = e.data.detail.message
        this.busy = true
      }
    },

    closeWindow() {
      window.close()
    },
  },

  async asyncData({ route, $axios }) {
    const fp = await fpPromise
    const result = await fp.get()

    try {
      const getCourse = await $axios.$get(
        `course-v/get-a-course-by-id/?course_id=${route.params.course}&school_id=${process.env.SCHOOL_ID}`
      )
      const getEvent = await $axios.$get(
        `course-v/get-course-event-by-id?course_id=${route.params.course}&event_id=${route.params.event}&school_id=${process.env.SCHOOL_ID}`
      )

      console.log(getCourse)

      // const getCourse = await $axios.$get(
      //   `course-v/get-a-course?course_id=${route.params.course}`
      // )
      // const getEvent = await $axios.$get(
      //   `course-v/get-course-event?course_id=${route.params.course}&event_id=${route.params.event}`
      // )

      return {
        course: getCourse,
        event: getEvent,
        browser: result.visitorId,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
.width75 {
  width: 75%;
}

.customcard {
  height: 100vh;
}

.imglogocontainer img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  background: #000;
}

.bodylightgray2 {
  background-color: #f7f7f7;
}

@media (max-width: 991.5px) {
  .width75 {
    width: 85%;
  }
}
</style>
