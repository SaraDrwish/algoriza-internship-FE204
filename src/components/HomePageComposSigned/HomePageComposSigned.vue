<template>
  <div class="">

    <div class="">
        <NavSignined   />
    </div>

    <div class="mx-auto w-[calc(100%-100px)] ">

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

import EnjoySec from '../HomePageCompos/enjoysec.vue';
import HomePageHeroImg from '../HomePageCompos/HomePageHeroImg.vue';
import GetInspirationSec from '../HomePageCompos/GetInspirationSec.vue';
import PopularHotelsSec from '../HomePageCompos/PopularHotelsSec.vue';
import HomeDownloadSec from '../HomePageCompos/HomeDownloadSec.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import footerlastbtm from '../footerlastbtm.vue';
import NavSignined from '../Navs/NavSignined.vue'

</script>

