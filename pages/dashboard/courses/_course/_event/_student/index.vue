<template>
  <div class="bodylightgray">
    <div class="mt-5 pt-md-5 horizontalspacing">
      <div class="my-4">
        <a
          href="#"
          @click.prevent="$router.go(-1)"
          class="brownparagraph bold700 mainbluecolor"
        >
          <b-icon icon="arrow-left"></b-icon>
          Student
        </a>
      </div>
      <header-card />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>

<style>
</style>