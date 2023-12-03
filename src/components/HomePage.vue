<script setup>
import NavSignined from "./components/HomePageCompos/Navs/NavSignined.vue";
// import Nav from "./components/HomePageCompos/Navs/Nav.vue";
import footerlastbtm from "./components/footerlastbtm.vue";
</script>

<template>
  <div class="  ">
    <div class="">
      <div class="">
        <NavSignined :showUl="true" :showRegstr="false" />
      </div>
      <div class=" "></div>
      <div class="">
        <footerlastbtm />
      </div>
    </div>
  </div>
</template>
