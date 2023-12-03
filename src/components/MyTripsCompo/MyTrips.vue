<template>
  <div class="pt-[128px] bg-bggraynstedpage relative">
    <div class="">
      <NavSignined :showRegstr="false" :showIcons="true" />
    </div>

    <!-- start container -->

    <div class="m-auto w-[calc(100%-100px)]">
      <div class="  ">
        <!-- //start small divs and small container  -->
        <MyTripsCards />
        <!-- //end small divs  -->

        <!-- start footer -->

        <div class="relative w-full h-[152px]">
          <HomeAlert class="top-[unset]" />
        </div>

        <div class="bottom-0 p-2">
          <HomeListFooter />
        </div>

        <!-- end footer -->
      </div>
    </div>

    <!-- end the container -->

    <div class="relative bottom-0">
      <footerlastbtmVue class="absolute bottom-0 w-full" />
    </div>
  </div>
</template>

<script setup>
import footerlastbtmVue from "../layout/footerlastbtm.vue";
import NavSignined from "../layout/NavSignined.vue";
import HomeListFooter from "../HomePageCompos/HomeListFooter.vue";
import HomeAlert from "../HomePageCompos/HomeAlert.vue";
import MyTripsCards from "./MyTripsCards.vue";
</script>
