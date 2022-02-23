<template>
  <div>
    <login-nav />
    <div class="horizontalspacing pt-5">
      <div>
        <div class="mt-5 pt-5">
          <div class="imglogocontainer d-flex justify-content-center">
            <img
              src="~/assets/images/koinoiologo.png"
              alt=""
              class="img-fluid logoimages"
            />
          </div>
          <div class="pt-3">
            <h2 class="text-center largebrownparagraph">
              Welcome to <span>{{ course.title }}</span> . Please fill in your
              details accordingly to join<span>{{ event.name }}</span>
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
              <label for="" class="d-block medbrownparagraph graytext"
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
              <label for="" class="d-block medbrownparagraph graytext"
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
              >
                Check in
              </button>
            </div>
          </form>
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
    }
  },
  methods: {
    async submitFunction() {
      try {
        await this.$axios.$post('', {
          school_id: process.env.SCHOOL_ID,
          surname: this.formInputs.surname,
          registation_number: this.formInputs.regNo,
          course_id: this.$route.params.course,
          event_id: this.$route.params.event,
        })
        this.$toast.success('Registration Successful')
      } catch (error) {
        console.log(error)
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
      alert(JSON.stringify(getId))
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
