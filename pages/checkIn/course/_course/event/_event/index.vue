<template>

  <div>
        <login-nav />
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="mt-5">
        <h2 class="largebrownparagraph">Account</h2>
      </div>

      <div class="bg-white mt-3">
        <form class="forminputpadding">
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Other Name
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g Nuella"
              class="forminputs text-dark"
            />
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Surname
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
            
              required
              placeholder="e.g Ime"
              class="forminputs text-dark"
            />
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Headline
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g Student"
              class="forminputs text-dark"
            />
          </div>
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Biography
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              class="forminputs text-dark"
            />
          </div>

          <!-- <div class="my-3">
            <h2 class="text-center brown24">Links</h2>
          </div> -->
          <!-- 
          <div class="my-2">
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
          </div> -->

          <div class="d-flex mt-3 justify-content-start pb-5">
            <input
              type="submit"
              value="Save"
              class="btn mainbtndashboard px-5 mb-5"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
