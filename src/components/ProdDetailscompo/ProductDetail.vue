<template>
  <div class="mb-[92px] top-[unset]">
    <NavSignined :showRegstr="false" :showIcons="true" />
  </div>

  <div class=" ">
    <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]">
      <ProdDetDon1 />
    </div>
  </div>

  <!-- //next section -->

  <div class="bg-bggraynstedpage">
    <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]">
      <div class="bg-bggraynstedpage flex flex-col p-2 mb-[172px] gap-[30px]">
        <div class=" ">
          <!-- start products details nav  -->
          <div class="flex gap-[14px] text-[16px] font-[400]">
            <span
              @click="handlePDN(!false)"
              class="py-[10px] px-[14px] cursor-pointer text-Gray2 border-b-4"
              :class="{
                'border-transparent': !PrdDetNv,
                'border-primary': PrdDetNv,
              }"
              >Overview</span
            >
            <span
              :class="{
                'border-transparent': PrdDetNv,
                'border-primary': !PrdDetNv,
              }"
              @click="handlePDN(false)"
              class="py-[10px] px-[14px] border-b-4 cursor-pointer text-Gray2"
              >Rooms</span
            >
          </div>
          <!--  end products details nav -->

          <!--  -->
          <ProdDetDon21 />
          <!--  -->

          <!-- /// -->
        </div>
      </div>

      <!-- /////////////////// -->

      <div class="relative top-[unset] bottom-[0px] w-[full]">
        <div class="top-[unset] h-[72px] w-full mb-[70px]">
          <HomeAlert class="top-[unset]" />
        </div>
        <div class="bg-bggraynstedpage p-1">
          <HomeListFooter />
        </div>
      </div>
    </div>
  </div>

  <div class="relative bottom-0 left-0 w-full">
    <footerlastbtm class="absolute left-0 bottom-0 w-[100%]" />
  </div>
</template>

<script setup>
import NavSignined from "../layout/NavSignined.vue";
import HomeAlert from "../HomePageCompos/HomeAlert.vue";
import HomeListFooter from "../HomePageCompos/HomeListFooter.vue";
import footerlastbtm from "../layout/footerlastbtm.vue";
import ProdDetDon1 from "./ProdDetDon1.vue";
import ProdDetDon21 from "./ProdDetDon2-1.vue";

import { ref } from "vue";

import { useGetHotelDetailsStore } from "../../stores/GetHotelDetails";
// ///////////////////////////////////////////////
const PrdDetNv = ref(true);

const handlePDN = (value) => {
  PrdDetNv.value = value;

  // //////// pinia store ///////

  const getHotelDetailsStore = useGetHotelDetailsStore();
  // Trigger the API call
  getHotelDetailsStore.fetchHotelDetails();
  // Access the data
  const hotelDetails = getHotelDetailsStore.hotelDetails;
  console.log("hotelDetails:::", hotelDetails);

  // /////////////end store /////////////////
};
</script>
