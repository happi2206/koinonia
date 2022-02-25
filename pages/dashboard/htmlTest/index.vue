<template>
  <div>
    <div class="mt-5 pt-5">
      <button @click="generateReport">buttons</button>
    </div>
    <client-only>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <section class="intro">
            <h1>ATTENDANCE</h1>
            <h2>CLASS OF 2022</h2>
            <h2>23 - FEB</h2>
            <!-- place-holder image -->
            <figure class="d-flex justify-content-center align-items-center">
              <VueQRCodeComponent
                text="https://github.com/gerardreches/vue-qrcode-component"
              ></VueQRCodeComponent>
            </figure>
            <h3>SCAN TO CHECK IN</h3>
            <div class="container">
              <ol>
                <li>Open your phone camera and point at the picture.</li>
                <li>
                  Once focued on the picture it will show Koinonia or a
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z"
                    />
                    <path
                      fill="currentColor"
                      d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2V5zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2zM20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2zm0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4z"
                    />
                  </svg>
                  icon.
                </li>
                <li>
                  Tap on the name or the icon to open the attendance web page.
                </li>
                <li>
                  Fill in your Surname and your 3 digit Registration Number on
                  the spaces provided.
                </li>
                <li>Click on Check in button.</li>
              </ol>
              <p class="stand-out">
                Note: If your camera does not pick up the QR code, you can
                download a free QR code scanner from App Store or Play Store.
              </p>

              <p>
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
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },
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
}
​ p:last-child {
  margin-bottom: 3rem;
}
​ .icon {
  position: relative;
  top: 3px;
}
</style>