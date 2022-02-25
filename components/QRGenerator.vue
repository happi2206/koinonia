<template>
  <div>
    <client-only>
      <vue-html2pdf
        :show-layout="true"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="Attendance QR code"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="A4"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <section class="intro">
            <h1 class="text-uppercase pt-4">ATTENDANCE</h1>
            <!-- <h3>CLASS OF 2022</h3> -->

            <h3 class="text-uppercase pt-4">{{ eventData.name }}</h3>

            <!-- <div class="d-flex justify-content-center mx-5 px-5 my-3">
              <h4 class="text-center">
                {{ eventData.start_date | DateTimeFormat }}
              </h4>
            </div> -->
            <!-- place-holder image -->
            <figure
              class="d-flex justify-content-center align-items-center my-5"
            >
              <VueQRCodeComponent
                :text="`${location}/checkIn/course/${courseId}/event/${eventId}`"
              ></VueQRCodeComponent>
            </figure>
            <h3 class="mb-3">SCAN TO CHECK IN</h3>
            <div class="container ml-8">
              <ol style="margin-left: 4rem">
                <li style="font-size: 1rem; font-weight: 600; padding: 1rem">
                  1. Open your phone camera and point at the picture.
                </li>
                <li
                  class="d-flex align-items-center"
                  style="font-size: 1rem; font-weight: 600; padding: 1rem"
                >
                  2.&nbsp;
                  <span>
                    Once focused on the picture it will show
                    <b><i>Koinonia</i></b> or a</span
                  >

                  <div class="pt-3 mx-2">
                    <span class="iconify" data-icon="bx:barcode-reader"></span>
                  </div>

                  icon.
                </li>
                <li style="font-size: 1rem; font-weight: 600; padding: 1rem">
                  3. Tap on the name or the icon to open the attendance web
                  page.
                </li>
                <li style="font-size: 1rem; font-weight: 600; padding: 1rem">
                  4. Fill in your Surname and your 3 digit Registration Number
                  on the spaces provided.
                </li>
                <li style="font-size: 1rem; font-weight: 600; padding: 1rem">
                  5. Click on Check in button.
                </li>
              </ol>
              <p class="stand-out ml-12">
                Note: If your camera does not pick up the QR code, you can
                download a free QR code scanner from App Store or Play Store.
              </p>

              <p class="ml-12">
                *You would need to have data on your phone to self check in.
              </p>
            </div>
          </section>
        </section>
      </vue-html2pdf>
    </client-only>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  data() {
    return {
      location: window.location.origin,
    }
  },
  props: {
    linkCode: {
      type: String,
    },
    courseId: {
      type: String,
      required: true,
    },
    eventId: {
      type: String,
      required: true,
    },
    eventData: {
      type: Object,
    },
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },
  },
  mounted() {
    console.log('mounted qrcode')
  },

  components: {
    VueHtml2pdf,
    VueQRCodeComponent,
  },
}
</script>

<style scoped>
.intro h1,
h2,
h3 {
  text-align: center;
}
​ .intro h1 {
  font-size: 3rem;
  margin-top: 0rem;
}
​ .intro h2 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
​ .intro h3 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 0;
}
​ .intro p {
  font-size: 1.3rem;
  font-weight: 900;
  color: #fca311;
}
​ ol {
  padding: 0.8rem 1.4rem 1.4rem 1.4rem;
  margin: 0;
}
​ .intro li {
  font-size: 1.3rem;
  padding: 0.5rem 0;
  font-weight: 500;
}
​ .container {
  padding-left: 3rem;
}
​ .container img {
  height: 16px;
  width: 16px;
}
​ figure {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-shrink: 2;
}
​ .intro img {
  width: 50%;
  height: 50%;
}
​ .stand-out {
  margin-top: 0;
  color: #fca311;
}
​ p:last-child {
  margin-bottom: 3rem;
}
​ .icon {
  position: relative;
  top: 3px;
}
</style>