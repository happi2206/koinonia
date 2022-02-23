<template>
  <div>
    <login-nav />
    <div class="horizontalspacing pt-5">
      <div>
        <div class="mt-5 pt-5">
          <div class="pt-5">
            <h2 class="text-center largebrownparagraph">
              Welcome to your <span></span> course. Please fill in your details
              accordingly
            </h2>
          </div>
          <h2 class="largebrownparagraph text-center">Check in</h2>
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
}
</script>

<style  scoped>
.width75 {
  width: 75%;
}

@media (max-width: 991.5px) {
  .width75 {
    width: 85%;
  }
}
</style>
