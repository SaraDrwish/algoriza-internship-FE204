<template>
  <div class="app" id="app">
    <!-- <Nav /> -->
    <div :showUl="true" :showRegstr="false">
      <NavSignined />
    </div>

    <div class="mx-auto w-[calc(100%-100px)]">
      <div class=" ">
        <HomePageHeroImg />
      </div>

      <div class=" ">
        <EnjoySec />
      </div>

      <div class="">
        <GetInspirationSec />
      </div>

      <div class="">
        <PopularHotelsSec />
      </div>

      <div class="">
        <HomeDownloadSec />
      </div>

      <div class="">
        <HomeListFooter />
      </div>
    </div>

    <div class="">
      <footerlastbtm />
    </div>
  </div>
</template>

<script setup>
import EnjoySec from "../components/HomePageCompos/enjoysec.vue";
import HomePageHeroImg from "../components/HomePageCompos/HomePageHeroImg.vue";
import GetInspirationSec from "../components/HomePageCompos/GetInspirationSec.vue";
import PopularHotelsSec from "../components/HomePageCompos/PopularHotelsSec.vue";
import HomeDownloadSec from "../components/HomePageCompos/HomeDownloadSec.vue";
import HomeListFooter from "../components/HomePageCompos/HomeListFooter.vue";
import footerlastbtm from "../components/layout/footerlastbtm.vue";
import NavSignined from "../components/layout/NavSignined.vue";
</script>
