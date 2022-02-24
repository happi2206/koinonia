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
        <b-overlay :show="busy" opacity="1" blur="0">
          <div class="card-body bg-white p-5">
            <strong
              ><h2 class="text-center">
                {{ course.title }}
              </h2></strong
            >
            <h2 class="text-center h1 lead">
              Please fill in your details accordingly to join<span>
                {{ event.name }}</span
              >
            </h2>

            <form class="p-md-5 px-2" @submit.prevent="submitFunction">
              <div class="my-4 py-2">
                <label for="" class="d-block graytext"
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
                <label for="" class="d-block graytext"
                  >Registeration Number
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  required
                  v-model="formInputs.regNo"
                  placeholder="e.g Ime"
                  class="forminputs text-dark"
                />
              </div>

              <div class="my-4 py-2 d-flex justify-content-center">
                <button
                  class="
                    btn-lg btn
                    py-md-3 py-2
                    mainbtndashboard
                    biggerparagraph
                    w-100
                    text-center text
                  "
                  ref="submit"
                  type="submit"
                >
                  Check in
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
              <!-- <b-icon
                icon="x-circle-fill"
                font-scale="3"
                variant="danger"
              ></b-icon> -->

              <div
                class="
                  d-flex
                  flex-column
                  align-items-center align-content-center
                "
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

                    <span class="bold800"> {{ other_name }}.</span>
                  </h2>
                  <h2 class="text-center biggerparagraph">
                    Your Attendance for
                    {{ event.name }} has been succesfully taken
                  </h2>
                </strong>
              </div>
            </div>
          </template>
        </b-overlay>
      </div>
    </div>
  </div>
</template>

<script>
const { detect } = require('detect-browser')
const browser = detect()
export default {
  data() {
    return {
      formInputs: {
        surname: 'Igbinedion',
        regNo: '020',
      },
      busy: false,
      processing: false,
      other_name: '',
    }
  },
  methods: {
    async submitFunction() {
      this.processing = false
      const string =
        this.formInputs.surname.charAt(0).toUpperCase() +
        this.formInputs.surname.slice(1)

      try {
        const response = await this.$axios.$post(
          'course-v/take-attendance-via-qrcode',
          {
            school_id: process.env.SCHOOL_ID,
            surname: string,
            registration_number: 'KSOM/2022/ABUJA/' + this.formInputs.regNo,
            course_id: this.$route.params.course,
            event_id: this.$route.params.event,
            browser: {
              name: browser.name,
              version: browser.version,
              os: browser.os,
            },
          }
        )

        this.other_name = response.message.other_name
        this.busy = true
      } catch (e) {
        this.$toast.error(e.data.detail.message)
        console.log(e.data.detail.message)
      }
    },
  },

  async asyncData({ route, $axios }) {
    try {
      const getCourse = await $axios.$get(
        `course-v/get-a-course?course_id=${route.params.course}`
      )
      const getEvent = await $axios.$get(
        `course-v/get-course-event?course_id=${route.params.course}&event_id=${route.params.event}`
      )

      return {
        course: getCourse,
        event: getEvent,
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
