<template>
  <div class="bodylightgray">
    <login-nav />
    <dashboard />
    <main class="bodylightgray page-content mt-0">
      <div class="mt-5 horizontalspacing">
        <div class="mt-5 pt-5">
          <h2 class="largebrownparagraph">Account</h2>
        </div>

        <div class="bg-white mt-3">
          <div class="d-flex justify-content-center py-3">
            <div>
              <div class="relativecontainer mt-5">
                <div class="imgroundedcontainer">
                  <img src="~assets/images/mansettings.png" alt="" />
                </div>
                <span class="absolutecontainer camimg"
                  ><Icon icon="bi:camera-fill" width="50" height="50"
                /></span>
              </div>

              <div>
                <h2 class="brown24 text-center">Basic Information</h2>
              </div>
            </div>
          </div>
          <form class="forminputpadding">
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >First Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g Nuella"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Last Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g Ime"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Designation
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g Student"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Headline
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Headline
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                class="forminputs text-dark"
              />
            </div>
            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Description
                <span class="text-danger">*</span>
              </label>

              <textarea
                name=""
                id=""
                class="forminputs textarea"
                cols="30"
                rows="40"
                required
                placeholder="e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              ></textarea>
            </div>

            <div class="my-3">
              <h2 class="text-center brown24">Links</h2>
            </div>

            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >LinkedIn
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g https://www.linkedin.com/in/username/"
                class="forminputs text-dark"
              />
            </div>

            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Facebook
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g https://www.facebook.com/in/username/"
                class="forminputs text-dark"
              />
            </div>

            <div class="my-5">
              <label for="" class="d-block medbrownparagraph graytext"
                >Twitter
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="e.g https://www.twitter.com/in/username/"
                class="forminputs text-dark"
              />
            </div>

            <div class="d-flex justify-content-center pb-5">
              <button class="btn mainbtndashboard px-5 mb-5">Save</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import dashboard from '../../layouts/dashboard.vue'
export default {
  components: { dashboard },
}
</script>

<style>
.bodylightgray {
  background-color: #f5f6f7;
}
</style>