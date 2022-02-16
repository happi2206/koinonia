<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
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
              required
              placeholder="e.g ella@mail.com"
              class="forminputs text-dark"
            />
          </div>

          <div class="my-3">
            <h2 class="text-center brown24">Links</h2>
          </div>

          <div class="my-5">
            <label for="" class="d-block medbrownparagraph graytext"
              >Change password
            </label>
            <input
              type="password"
              required
              placeholder="Enter current password"
              class="forminputs"
            />
          </div>
          <div class="my-5">
            <input
              type="password"
              required
              placeholder="Enter new password"
              class="forminputs"
            />
          </div>
          <div class="my-5">
            <input
              type="password"
              required
              placeholder="Retype new password"
              class="forminputs"
            />
          </div>

          <div class="d-flex justify-content-center pb-5">
            <button class="btn mainbtndashboard px-5 mb-5">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  components: {},
}
</script>

<style>
</style>