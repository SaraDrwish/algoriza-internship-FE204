<template>
  <div class="">
    <div v-if="loading">
      <WelcomeCard />
    </div>

    <div>
      <NavSignined :showRegstr="false" :showIcons="true" />
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
import footerlastbtm from "../layout/footerlastbtm.vue";
import NavSignined from "../layout/NavSignined.vue";
import WelcomeCard from "./WelcomeCard.vue";

import { ref, onMounted } from "vue";

import { authService } from "../../auth";

const loading = ref(true);
const isSignedIn = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    isSignedIn.value = authService.checkUserSignIn();
  }, 1000);
});
</script>
