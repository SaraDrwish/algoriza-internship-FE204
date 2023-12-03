<template>
  <div class="bg-bggraynstedpage py-2">
    <div class="mt-[128px] mb-[141px]">
      <NavSignined :showRegstr="false" :showIcons="true" :showUl="false" />

      <div class="m-auto w-[calc(100%-100px)]">
        <p class="text-[32px] font-[600] text-checkoutText1 mb-[30px]">
          Secure your reservation
        </p>

        <div class="relative">
          <HomeAlert class="top-[unset]" />
        </div>

        <div class="flex gap-[30px] mt-[130px]">
          <!-- start left big div -->
          <ChaeckoutLeft />
          <!-- end left big div -->

          <!-- start right big div -->
          <div class="flex-2 flex flex-col gap-[30px] w-1/3">
            <ChaeckoutRight />
          </div>
          <!-- end right big div -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeAlert from "../HomePageCompos/HomeAlert.vue";
import ChaeckoutRight from "./ChaeckoutRight.vue";
import ChaeckoutLeft from "./ChaeckoutLeft.vue";
import NavSignined from "../layout/NavSignined.vue";

// /////////////////////////////////////
</script>
