<template>
  <div class="">
    <div v-if="loading">
      <WelcomeCard :loading="loading" />
    </div>

    <div class="">
      <NavSignined />
    </div>

    <div v-if="!loading" class="mx-auto w-[calc(100%-100px)]">
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
import EnjoySec from "../HomePageCompos/enjoysec.vue";
import HomePageHeroImg from "../HomePageCompos/HomePageHeroImg.vue";
import GetInspirationSec from "../HomePageCompos/GetInspirationSec.vue";
import PopularHotelsSec from "../HomePageCompos/PopularHotelsSec.vue";
import HomeDownloadSec from "../HomePageCompos/HomeDownloadSec.vue";
import HomeListFooter from "../HomePageCompos/HomeListFooter.vue";
import footerlastbtm from "../footerlastbtm.vue";
import NavSignined from "../Navs/NavSignined.vue";
import WelcomeCard from "./WelcomeCard.vue";

import { ref, onMounted } from "vue";

import { authService } from "../../auth";

const loading = ref(true);
const isSignedIn = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = false; // Hide the card after 3 seconds
    isSignedIn.value = authService.checkUserSignIn();
  }, 3000);
});
</script>
