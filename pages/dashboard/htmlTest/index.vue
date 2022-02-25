<template>
  <div>
    <div class="mt-5 pt-5">
      <button @click="generateReport">button</button>
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
              <img
                src="data:image/png;base64, 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"
                alt=""
              />
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