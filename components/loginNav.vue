<template>
  <nav
    class="
      navz
      darkerbluebg
      align-items-center
      navbar-expand-md
      mobilenavigation
      pt-3
      pb-3
      pt-md-0
      pb-md-1
      secondaryheader
      darkborderbottom
    "
  >
    <div class="d-flex justify-content-between width100">
      <div class="d-block d-md-none">
        <div class="d-flex align-items-center">
          <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
            <img src="images/blueyellologo.png" alt="" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="d-md-none d-flex">
        <button v-if="isSignIn"
          class="
            btn
            loginbtndashboard
            px-md-4 px-3
            py-md-2 py-1
            text-white
            mx-md-2 mx-1
          "
        >
          Login
        </button>
        <button v-if="isSignUp" class="btn mainbtn px-md-4 px-3 py-md-2 py-1 mx-md-2 mx-1">
          Sign Up
        </button>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          class="iconify text-white"
          data-icon="ci:menu-alt-04"
          data-width="30"
          data-height="30"
        ></span>
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
              <img
                src="~/assets/images/blueyellologo.png"
                alt=""
                class="img-fluid"
              />
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
            <a class="nav-link text-white dashboardlink mb-0" href="#"
              >My learning
            </a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link text-white dashboardlink" href="#"
              >Instructors dashboard
            </a>
          </li>
          <button v-if="isSignUp"
            class="
              btn
              loginbtndashboard
              px-4
              py-2
              text-white
              mx-2
              d-none d-md-block
            "
          >
            Login
          </button>
          <button v-if="isSignIn" class="btn mainbtndashboard px-4 py-2 mx-2 d-none d-md-block">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
   name: 'loginnavbar',
  data() {
    return {
      isSignUp: false,
      isSignIn: false,
    }
  },
  methods: {
    set_button() {
      console.log(this.$nuxt.$route.name)

      if(this.$nuxt.$route.name == 'login'){
        this.isSignUp = true
      }
      if(this.$nuxt.$route.name == 'register'){
        this.isSignIn = true
      } 
    },
  },
  mounted(){
    this.set_button()
  },
}
</script>

<style>
</style>