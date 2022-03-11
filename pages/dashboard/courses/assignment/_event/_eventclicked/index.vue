<template>
  <div class="m-5">
    <div class="d-flex mynav align-items-center">
      <b-icon icon="arrow-left" class="mx-2 mainbluecolor"></b-icon>
      <a
        href="#"
        @click.prevent="$router.go(-1)"
        class="
          brownparagraph
          bold700
          mainbluecolor
          mb-0
          d-flex
          align-items-center
        "
      >
        <span></span>
        <span
          class="iconify mainbluecolor"
          data-icon="dashicons:arrow-left-alt2"
        ></span>

        <span> </span>
      </a>
    </div>
    <div class="mt-4">
      <div class="container-fluid">
        <div>
          <h1>HEY</h1>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-content-center align-items-center">
              <div class="flex-grow-1">
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-between
                    flex-wrap
                    mb-3
                  "
                >
                  holla
                </div>

                <!-- ***************************************************************** -->
                <hr />
              </div>
              <div class="row">
                <div class="col-md-4 mb-2 text-capitalize"></div>
                <div class="col-md-4 mb-2 text-capitalize"></div>
                <div class="col-md-4 mb-2 text-capitalize"></div>
                <div class="col-md-4 mb-2 text-capitalize"></div>
                <div class="col-md-4 mb-2 text-capitalize"></div>
                <div class="col-md-4 mb-2 text-capitalize"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {}
  },
  async fetch() {
    this.isLoading = true

    try {
      const assignment = await this.$axios.$get(
        `course-v/get-an-assignment?assignment_id=${this.$route.params.event}`
      )

      console.log('assignment', assignment)
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
.mynav {
  margin-top: 7rem;
}
</style>