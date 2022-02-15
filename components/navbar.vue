<template>
  <nav
    class="
      horizontalspacing
      navbar-expand-md
      mobilenavigation
      py-3 py-md-0
      secondaryheader
      darkborderbottom
    "
  >
    <div class="d-flex justify-content-between width100">
      <div class="d-block d-md-none">
        <div class="d-flex align-items-center">
          <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
            <img src="~/assets/images/logo1.png" alt="" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="d-md-none d-flex">
        <button class="btn loginbtn px-3 py-2 mainbluecolor mx-2">Login</button>
        <button class="btn mainbtn px-3 py-2 mx-2">Sign Up</button>
      </div>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
 
      </button>
    </div>
    <div
      class="collapse navbar-collapse horizontalspacing my-3"
      id="navbarSupportedContent"
    >
      <div
        class="
          d-flex
          flex-column
          align-items-center
          flex-md-row
          justify-content-md-between
          w-100
          navigationflexspacing
        "
      >
        <div class="firstcontent d-none d-md-block">
          <div class="d-flex align-items-center">
            <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
              <img src="~/assets/images/logo1.png" alt="" class="img-fluid" />
            </a>
          </div>
        </div>
        <div class="secondcontent p-0 m-0">
          <a href="index.html" class="maincolor largetext"></a>
        </div>

        <ul
          class="
            thirdcontent
            d-flex
            flex-md-row flex-column
            align-items-center
            mb-0
          "
        >
          <li class="nav-item mb-0">
            <a class="nav-link navtext" href="#">Category </a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link navtext" href="#">Academy </a>
          </li>
          <button
            class="btn loginbtn px-4 py-2 mainbluecolor mx-2 d-none d-md-block"
          >
            Login
          </button>
          <button class="btn mainbtn px-4 py-2 mx-2 d-none d-md-block">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      isSignUp: false,
      isSignIn: false,
    }
  },
  methods: {
    set_button() {
      console.log(('henry'));
      console.log(this.$nuxt.$route.path)
    },
  },
  mounted(){
    console.log(('henry'));
    this.set_button()
  },
}
</script>

<style></style>
