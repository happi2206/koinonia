<template>
  <div>
    <profile-sidebar />
    <div class="page-content mt-0 height">
      <div class="bodylightgray horizontalspacing">
        <div class="pt-5 horizontalspacing">
          <div class="mt-5">
            <h2 class="largebrownparagraph">Account</h2>
          </div>

          <div class="bg-white mt-3">
            <form
              class="forminputpadding py-3"
              @submit.prevent="changePassword"
            >
              <div class="my-5">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Email
                </label>
                <input
                  type="email"
                  v-model="this.user.email"
                  disabled
                  placeholder="e.g ella@mail.com"
                  class="forminputs text-dark"
                />
              </div>

              <div class="my-3">
                <h2 class="text-center brown24">Password</h2>
              </div>

              <div class="my-5">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Enter old password
                </label>
                <input
                  type="password"
                  v-model="password_object.current_password"
                  required
                  placeholder="Enter new password"
                  class="forminputs"
                />
              </div>
              <div class="my-5">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Enter new password
                </label>
                <input
                  type="password"
                  required
                  v-model="password_object.new_password"
                  placeholder="Enter your new password"
                  class="forminputs"
                />
              </div>
              <div class="my-5">
                <label for="" class="d-block medbrownparagraph graytext"
                  >Confirm new password
                </label>
                <input
                  type="password"
                  required
                  v-model="confirm_pssword"
                  placeholder="Confirm your new password"
                  class="forminputs"
                />
              </div>

              <div class="d-flex justify-content-center pb-5">
                <input
                  class="btn mainbtndashboard text-center px-4 mb-5"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      password_object: {
        current_password: '',
        new_password: '',
      },
      confirm_pssword: '',
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      token: 'auth/token',
    }),
  },
  methods: {
    async changePassword() {
      if (this.confirm_pssword !== this.password_object.new_password) {
        this.$bvToast.toast(`Check your passwords`, {
          title: 'Passwords do not match',
          variant: 'danger',
          solid: true,
        })
      } else {
        console.log('workex')
        return
        try {
          await this.$axios.$patch(`user/change-password`, this.password_object)
        } catch (error) {
          console.log(error)
          // this.$toast.error(error.detail)
        }
      }
    },
  },
}
</script>

<style>
</style>