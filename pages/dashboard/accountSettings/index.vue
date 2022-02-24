<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-3 horizontalspacing">
      <div class="mt-5">
        <h2 class="largebrownparagraph">Account</h2>
      </div>

      <div class="bg-white mt-3">
        <form class="forminputpadding py-3">
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
              >Change password
            </label>
            <input
              type="password"
              v-model="password_object.old_password"
              required
              placeholder="Enter current password"
              class="forminputs"
            />
          </div>
          <div class="my-5">
            <input
              type="password"
              v-model="password_object.new_password"
              required
              placeholder="Enter new password"
              class="forminputs"
            />
          </div>
          <div class="my-5">
            <input
              type="password"
              required
              v-model="password_object.new_password"
              placeholder="Retype new password"
              class="forminputs"
            />
          </div>

          <div class="d-flex justify-content-center pb-5">
            <input
              class="btn mainbtndashboard text-center px-2 mb-5"
              type="sumbit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'dashboard',
  data() {
    return {
      password_object: {
        old_password: '',
        new_password: '',
        confirm_pssword: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      token: 'auth/token',
    }),
  },
  methods: {},
}
</script>

<style>
</style>