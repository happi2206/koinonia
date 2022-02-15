<template>
  <b-navbar
    toggleable="md"
    class="
      navz
      darkerbluebg
      align-items-center
      navbar-expand-md
      mobilenavigation
      pt-2
      pb-2
      pt-md-0
      pb-md-1
      secondaryheader
      darkborderbottom
    "
  >
    <b-navbar-toggle target="nav-collapse" class="text-white"
      ><Icon icon="bytesize:menu"
    /></b-navbar-toggle>

    <div class="d-flex justify-content-between width100">
      <div class="d-block d-md-none">
        <div class="d-flex align-items-center">
          <a class="navbar-brand logo-icon-mobile pr-2 mr-2" href="#">
            <img
              src="~assets/images/blueyellologo.png"
              alt=""
              class="img-fluid"
            />
          </a>
        </div>
      </div>
      <div class="d-md-none d-flex">
        <button
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
        <button class="btn mainbtn px-md-4 px-3 py-md-2 py-1 mx-md-2 mx-1">
          Sign Up
        </button>
      </div>
      <!-- <b-collapse id="nav-collapse" is-nav>
        <div class="d-md-none d-flex">
          <button
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
          <button class="btn mainbtn px-md-4 px-3 py-md-2 py-1 mx-md-2 mx-1">
            Sign Up
          </button>
        </div>
      </b-collapse> -->
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
          <button
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
          <button class="btn mainbtndashboard px-4 py-2 mx-2 d-none d-md-block">
            Sign Up
          </button>
        </ul>

        <div class="ml-2">
          <div
            class="
              dropdown
              account-dropdown
              d-none d-md-flex
              align-items-center
            "
          >
            <div class="profimgfull d-none d-md-block">
              <b-avatar variant="success"></b-avatar>
            </div>

            <a
              href="#"
              class="dropdown-toggle text-white"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mx-2"> John Doe</span
              ><span
                class="iconify"
                data-icon="akar-icons:chevron-down"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item medbrownparagraph" href="#">Option 1</a>
              <a class="dropdown-item medbrownparagraph" href="#">Option 2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style>
</style>