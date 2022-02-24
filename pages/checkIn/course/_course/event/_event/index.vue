<template>
  <div>
    <login-nav />
    <div class="horizontalspacing pt-5">
      <div>
        <div class="mt-5 pt-5">
          <div class="pt-3">
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
          </div>
          <p class="medbrownparagraph"></p>
        </div>

        <div class="bg-white mt-3 d-flex justify-content-center">
          <form
            class="forminputpadding w-75 width75"
            @submit.prevent="submitFunction"
          >
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
                  btn
                  py-md-3 py-2
                  mainbtndashboard
                  largebrownparagraph
                  w-100
                  text-center text
                  bold700
                "
                ref="submit"
                type="submit"
              >
                Check in
              </button>
            </div>
          </form>
        </div>
        <div class="bg-white mt-3 d-flex justify-content-center">
          <b-overlay
            :show="busy"
            no-wrap
            @shown="onShown"
            @hidden="onHidden"
            opacity="1rem"
          >
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
                  p-3
                "
              >
                <div class="d-flex justify-content-center">
                  <img
                    src="~/assets/images/welcomemessage.svg"
                    alt=""
                    class="img-fluid logoimages"
                  />
                </div>
                <p>
                  <strong id="form-confirm-label">
                    <h2 class="text-center largebrownparagraph">
                      Welcome

                      <span class="bold800"> {{ other_name }}.</span>
                    </h2>
                    <h2 class="text-center largebrownparagraph">
                      Your Attendance for
                      {{ event.name }} has been succesfully taken
                    </h2>
                  </strong>
                </p>
              </div>
            </template>
          </b-overlay>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    onShown() {
      this.$refs.dialog.focus()
    },
    onHidden() {
      this.$refs.submit.focus()
    },
    async submitFunction() {
      this.processing = false
      //  const string =
      //  this.formInputs.surname.charAt(0).toUpperCase() + string.slice(1)

      try {
        const response = await this.$axios.$post(
          'course-v/take-attendance-via-qrcode',
          {
            school_id: process.env.SCHOOL_ID,
            surname: this.formInputs.surname,
            registration_number: 'KSOM/2022/ABUJA/' + this.formInputs.regNo,
            course_id: this.$route.params.course,
            event_id: this.$route.params.event,
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

<style  scoped>
.width75 {
  width: 75%;
}

.imglogocontainer img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  background: #000;
}

@media (max-width: 991.5px) {
  .width75 {
    width: 85%;
  }
}
</style>
