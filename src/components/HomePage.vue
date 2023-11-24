<script setup>

import Nav from "./components/HomePageCompos/Navs/Nav.vue"
import HomePage from "./views/Home.vue"
import footerlastbtm from "./components/footerlastbtm.vue";
import HomePageHeroImg from "./HomePageCompos/HomePageHeroImg.vue";

</script>

<template>
  <div class="  ">

    <div class="">

      <div class="">
        <Nav />
      </div>
      <div class=" ">
        <!-- <div class="flex flex-col mx-auto w-[calc(100%-100px)] items-center justify-center    "> -->
        <!-- <HomePageHeroImg /> -->
      </div>
      <div class="">
        <footerlastbtm />
      </div>

    </div>
    <!-- <RouterView /> -->
  </div>
</template>
