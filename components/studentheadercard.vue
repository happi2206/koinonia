<template>
  <div class="bg-white rounded">
    <div class="d-flex">
      <div class="col-md-3 px-0 pl-md-3">
        <div class="rounded">
          <img
            :src="courseDetails.feature_image"
            alt=""
            class="img-fluid mt-4 rounded customsizing"
          />
        </div>
      </div>

      <div class="col-md-9 pl-4 pr-3">
        <div
          class="
            border-bottom
            d-flex
            align-items-center
            justify-content-between
            pt-2
          "
        >
          <h2 class="largebrownparagraph py-1 bold700 text-capitalize mb-0">
            efewffrfwes
          </h2>
          <p class="text-14 mb-0">Opened</p>
        </div>
        <div class="my-md-2 w-100 my-0 p-1 row" style="margin: 0 0 0 -8px">
          <div class="col-lg-4 pl-0 pr-0 col-4">
            <p class="my-md-2 my-0 p-1 medbrownparagraph">
              <span class="lightgraytext"> Class code:</span>
              {{ courseDetails.course_code }}
            </p>
            <p class="my-md-2 my-0 p-1 medbrownparagraph">
              <span class="lightgraytext"> Start Date:</span>

              {{ courseDetails.start_date | DateFormat }}
            </p>
          </div>
          <div class="col-lg-4 pl-0 col-4">
            <p class="my-md-2 my-0 p-1 medbrownparagraph">
              <span class="lightgraytext"> Class Year:</span>
              {{ courseDetails.enroll_date | DateFormat }}
            </p>
            <p class="my-md-2 my-0 p-1 medbrownparagraph">
              <span class="lightgraytext"> End Date:</span>
              {{ courseDetails.end_date | DateFormat }}
            </p>
          </div>
          <div class="col-lg-12 pl-0 col-4">
            <p class="my-md-2 my-0 p-1 medbrownparagraph">
              {{ courseDetails.description }}
            </p>
            <p class="text-14 p-1 mt-1 medbrownparagph" style="color: #222529">
              {{ courseDetails.no_of_students }} Enrolled
            </p>
            <div
              style="margin: 0 0 0 1px"
              class="text-14 row align-items-center"
              v-if="onGoingClass"
            >
              <div style="color: #0734aa" class="px-1">
                There is an on-going event, scan QR Code
              </div>
              <div
                style="he"
                class="qrcodebutton ml-4 btn mainbtndashboard d-flex"
              >
                <span
                  class="iconify"
                  data-icon="ic:outline-qr-code-scanner"
                  style="color: black"
                  data-width="20"
                  data-height="20"
                ></span
                ><span class="text-13 ml-1">Scan QR Code</span>
              </div>
              <div
                class="
                  joinlive
                  d-flex
                  justify-content-center
                  align-items-center
                  ml-3
                "
              >
                <div
                  style="
                    width: 8px;
                    height: 8px;
                    background-color: #e1002a;
                    border-radius: 50%;
                  "
                ></div>
                <span class="text-13 ml-2">Join live</span>
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
  data() {
    return {
      onGoingClass: true,
    }
  },
  props: {
    courseDetails: {
      type: Object,
    },
  },
}
</script>

<style>
.joinlive {
  cursor: pointer;
  width: 106px;
  height: 35px;
  background: #333333;
  border-radius: 5px;
  color: #fff;
}
</style>