<template>
  <div>
    <login-nav />
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
input:focus{
  outline:none;

}
.btn-group > .btn, .btn-group-vertical > .btn{
  padding: 0 !important
}
.custom-control-input:checked ~ .custom-control-label::before{
  background-color: green !important;
  border-color: green !important;
  color: white !important;
}
.custom-control-label::before{
  background-color: rgb(173, 11, 11) !important;
}
</style>