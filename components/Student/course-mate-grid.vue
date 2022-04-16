<template>
  <div>
    <div>
      <b-card
        :img-src="coursemate.profile_picture"
        img-alt="Instructor's Image"
        img-top
        tag="article"
        style="max-width: 15rem; border-radius: 10px, max-height: 369px; min-height: 18rem"
        class="mb-2 p-3"
      >
        <div class="d-flex flex-column" style="text-align: center">
          <p class="text-14 pt-3 pb-2 m-0">
            {{ coursemate.other_name }} {{ coursemate.surname }}
          </p>
          <div style="max-height: 6rem; min-height: 5.9rem" class="x mb-2">
            <p class="text-13">
              {{ coursemate.biography }}
            </p>
          </div>

          <div class="d-flex mt-3 justify-content-between">
            <div class="w-50 d-flex justify-content-between">
              <span
                class="iconify icons"
                data-icon="akar-icons:linkedin-v1-fill"
                style="color: black"
                data-width="22"
                data-height="22"
              ></span>
              <span
                class="iconify icons"
                data-icon="akar-icons:twitter-fill"
                style="color: black"
                data-width="22"
                data-height="22"
              ></span>
              <span
                class="iconify icons"
                data-icon="fe:facebook"
                style="color: black"
                data-width="22"
                data-height="22"
              ></span>
            </div>
            <div class="link" style="text-decoration: underline">
              <nuxt-link class="text-14" to="#">See more</nuxt-link>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coursemate: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
.icons {
  cursor: pointer;
}
.x {
  overflow: hidden;
}
</style>