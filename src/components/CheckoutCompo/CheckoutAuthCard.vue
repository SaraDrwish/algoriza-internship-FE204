<template>
  <div
    class="relative top-[99px] z-[1000] w-[450px] h-[500px] bg-white rounded-[10px] px-[24px] pb-[28px] bt-[50px] flex flex-col gap-[45px] items-center justify-center text-center m-auto"
  >
    <div
      class="w-[240px] h-[200px] bg-[#6FCF9766] flex justify-center items-center rounded-[10px]"
    >
      <img
        class="w-[160px] h-[160px]"
        src="../../assets/imgs/seccure.png"
        alt="secure"
      />
    </div>
    <div class="flex flex-col gap-[12px]">
      <span class="text-[20px] font-[600]">Booking Successful</span>
      <p class="text-light-black text-[16px]">
        Congratulations your reservation has been made. You will be notified 2
        days prior the date.
      </p>
    </div>
    <div class="w-[100%]">
      <RouterLink :to="{ name: 'mytrips' }">
        <button class="text-white bg-primary py-[12px] px-[18px] w-full">
          View Trip
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
