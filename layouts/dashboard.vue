<template>
  <nav
    id="sidebar"
    class="sidebar-wrapper bg-white d-none d-lg-block mt-5 pt-5"
  >
    <div class="sidebar-menu my-5">
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <a href="" class="text-dark">
          <span class="largebrownparagraph">
            <slot name="contentheader"></slot
          ></span>
        </a>
      </li>

      <li class="sidebar-dropdown py-1 my-3 px-3 py-2 active">
        <a href="#" class="darkerbluecolor">
          <span class="medbrownparagraph">
            <slot name="contentactive">Public Profile</slot>
          </span>
        </a>
      </li>
      <li class="sidebar-dropdown py-1 my-3 px-3 py-2">
        <a href="" class="text-dark">
          <span class="medbrownparagraph">
            <slot name="content">Public Profile</slot>
          </span>
        </a>
      </li>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>