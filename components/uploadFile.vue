<template>
  <div>
    <input
      required
      @change="uploadImage"
      ref="uploadImage"
      type="file"
      class="hidden"
    />

    <button
      type="button"
      @click.prevent="$refs.uploadImage.click()"
      class="btn px-md-4 px-3 py-2 upbtn medbrownparagraph"
    >
      <slot name="edittext"></slot>
      Upload Image
    </button>
  </div>
</template>
<script>
export default {
  name: 'uploadfile',
  // props: {
  //   textcontent: {
  //     type: String,
  //     required
  //   },
  // },
  data() {
    return {}
  },
  methods: {
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
      this.$emit('input', url)
    },
  },
}
</script>