<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="mt-5">
        <h2 class="largebrownparagraph">Account</h2>
      </div>

      <div class="bg-white mt-3">
        <div class="d-flex justify-content-center py-3">
          <div>
            <input
              @change="uploadImage"
              accept="image/png, image/jpeg"
              ref="getImage"
              type="file"
              class="hidden"
            />
            <div class="relativecontainer mt-5">
              <b-avatar
                :size="200"
                :src="public_detail.profile_picture"
                badge-variant="info"
              >
              </b-avatar>

              <span
                @click.prevent="$refs.getImage.click()"
                class="icon-camera bg-yellow-300 p-2 rounded-full"
              >
                <b-icon
                  style="width: 30px; height: 30px"
                  icon="camera"
                ></b-icon>
              </span>
            </div>

            <div class="mt-5">
              <h2 class="text-4xl text-center">Basic Information</h2>
            </div>
          </div>
        </div>
        <form @submit.prevent="updatePublicProfile" class="forminputpadding">
          <div class="my-2">
            <label for="" class="d-block medbrownparagraph graytext"
              >Other Name
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              v-model="public_detail.other_name"
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
              v-model="public_detail.surname"
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
              v-model="public_detail.headline"
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
              v-model="public_detail.biography"
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
            <input type="submit" value="Save" class="btn mainbtndashboard px-5 mb-5"/>
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
  data() {
    return {
      public_detail: {
        surname: '',
        other_name: '',
        profile_picture: '',
        headline: '',
        biography: '',
        socials: [],
      },
    }
  },
  methods: {
    async getUserProfile() {
      try {
        const userprofile = await this.$axios.$get(
          `user-v/get-user-public-profile`
        )
        if (Object.keys(userprofile).length > 0) {
          this.public_detail = userprofile
        }
      } catch (error) {
        this.$toast.error(error)
      }
    },
    async uploadImage(e) {
      let filesSelected = e.target.files[0]
      let url = await new Promise((resolve) => {
        if (filesSelected) {
          var fileReader = new FileReader()

          fileReader.onload = function (fileLoadedEvent) {
            var {
              target: { result },
            } = fileLoadedEvent // <--- data: base64
            resolve(result)
          }

          fileReader.readAsDataURL(filesSelected)
        }
      })
      this.public_detail.profile_picture  = url
    },
    async updatePublicProfile(){
        try {
        const userprofile = await this.$axios.$patch(
          `user-v/update-user-public-profile`,this.public_detail
        )
        console.log(userprofile)
        this.getUserProfile()
      } catch (error) {
        this.$toast.error(error)
      }

    }
  },
  mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.getUserProfile()
      this.$nuxt.$loading.finish()
    })
  },
}
</script>

<style>
.bodylightgray {
  height: 100vh;
  background-color: #f5f6f7;
}
.icon-camera {
  position: absolute;
  bottom: 20px;
  right: 50px;
}
</style>