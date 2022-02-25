<template>
  <div>
    <QRGenerator />
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