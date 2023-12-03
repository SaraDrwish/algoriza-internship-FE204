<template>
  <header class="text-white mb-[104px]">
    <div
      class="relative top-0 text-white h-[200px] w-full bg-gradient-to-b from-laniergrad1 to-laniergrad2"
    >
      <!-- ///start nav///// -->

      <!-- <NavSignined :showRegstr="false" :showIcons="true" /> -->
      <SearchResultsNavVue />

      <!-- ////end nav//// -->

      <!-- //////////start search////////// -->
      <div class="absolute left-[85px] bottom-[-15%] text-Gray2">
        <HomeSearch
          :searchQuery="city"
          :checkInDate="checkin"
          :checkOutDate="checkout"
          :guests="guests"
          :rooms="rooms"
        />
      </div>
      <!-- //////////end search///////// -->
    </div>
  </header>

  <!-- ////////////////////start body//////////////////////// -->

  <div class="relative m-auto w-[calc(100vw-200px)]">
    <div class="flex mb-[96px] gap-[30px]">
      <div class="leftbox flex flex-col gap-[20px] flex-2">
        <SearchResultsLeftSideVue />
      </div>

      <!-- end flex 2-->

      <div class="flex-1">
        <SearchResultsRightSidTop />

        <!-- start cards -->

        <!-- ///////// -->

        <SearchResultsRightDonSide />

        <!-- //////// -->

        <!-- end cards -->

        <!-- ------start pagination ------  -->

        <div class=" ">
          <SearchResultsPagination />
        </div>

        <!-- ------end pagination ------  -->
      </div>

      <!-- end flex 1 -->
    </div>

    <!-- /////////////////////end body/////////////////////// -->

    <div class="top-[unset] h-[72px] w-full mb-[70px]">
      <HomeAlert class="top-[unset]" />
    </div>

    <div class=" ">
      <div class="bottom-0">
        <HomeListFooter />
      </div>
    </div>
  </div>

  <div class="relative bottom-0 left-0 w-full">
    <footerlastbtm class="absolute left-0 bottom-0 w-[100%]" />
  </div>
</template>

<script setup>
import HomeSearch from "../HomePageCompos/HomeSearch.vue";
import HomeAlert from "../HomePageCompos/HomeAlert.vue";
import HomeListFooter from "../HomePageCompos/HomeListFooter.vue";
import footerlastbtm from "../layout/footerlastbtm.vue";
import { ref, defineProps } from "vue";
import axios from "axios";
import { onMounted } from "vue";

import SearchResultsRightDonSide from "./SearchResultsRightDonSide.vue";
import SearchResultsLeftSideVue from "./SearchResultsLeftSide.vue";
import SearchResultsRightSidTop from "./SearchResultsRightSidTop.vue";
import NavSignined from "../layout/NavSignined.vue";
import SearchResultsNavVue from "./SearchResultsNav.vue";
import SearchResultsPagination from "./SearchResultsPagination.vue";

const props = defineProps({
  city: String,
  checkInDate: String,
  checkOutDate: String,
  guests: Number,
  rooms: Number,
  modalActive: {
    type: Boolean,
    default: false,
  },
});

// /////////////////////

const searchResults = ref(null);

onMounted(async () => {
  searchResults.value = await fetchSearchResults();
});

const handleSearch = async () => {
  if (!checkInDate.value || !checkOutDate.value) {
    alert("Please select both arrival and departure dates.");
    return;
  }

  try {
    const response = await fetchHotelData({
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: checkInDate.value,
      departure_date: checkOutDate.value,
      adults: "1",
      children_age: "0,17",
      room_qty: "1",
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
    });

    console.log(response);
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }
};

// //////////////////////////////////////////////////////////////
// import { useSearchResultsStore } from "../../stores/searchResultsStore";
// const searchResultsStore = useSearchResultsStore();

// onMounted(async () => {
//   await searchResultsStore.fetchSearchResults({
//     dest_id: "-2092174",
//     search_type: "CITY",
//     arrival_date: props.checkInDate,
//     departure_date: props.checkOutDate,
//     currency_code: "AED",
//   });
// });

// const handleSearch = async () => {
//   await searchResultsStore.fetchSearchResults({
//     dest_id: "-2092174",
//     search_type: "CITY",
//     arrival_date: props.checkInDate,
//     departure_date: props.checkOutDate,
//     currency_code: "AED",
//   });

//   console.log(searchResultsStore.searchResults);
// };

// //////////////////////////////////////////////////////////////
</script>

<style scoped>
input {
  background-color: unset !important;
}
button {
  transition: all 0.3s ease-in;
}
</style>
