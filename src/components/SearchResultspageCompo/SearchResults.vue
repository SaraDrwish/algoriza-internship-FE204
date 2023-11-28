<template >

  <header class="text-white mb-[104px]  ">

    <div class="relative top-0 text-white h-[200px] w-full bg-gradient-to-b from-laniergrad1 to-laniergrad2 "> 
    
    <!-- ///start nav///// -->

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

<div class=" relative m-auto w-[calc(100vw-200px)] "> 
 
  <div class="flex mb-[96px] gap-[30px]">
 
    <div class="leftbox flex flex-col gap-[20px] flex-2  ">

    <SearchResultsLeftSideVue />

    </div>

    <!-- end flex 2-->

  <div class="flex-1  ">

    <SearchResultsRightSidTop />
    
  <!-- start cards -->

  <!-- ///////// -->
  
    <SearchResultsRightDonSide/>
 
  <!-- //////// -->

  <!-- end cards -->

    <div class="mt-[56px] flex gap-[8px] m-auto text-center items-center justify-center ">

      <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white  ">
        <img class="w-[40px] h-[40px] rounded-[6px] " src="../../assets/icons/Arrow.svg" alt="leftarr">
      </div>

<!-- ------start pagination ------  -->

      <div class="flex ">
        <div class="active rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-primary text-white  
        text-[16px] py-[9px] text-center">1</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">2</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">3</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">....</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr
          text-[16px] py-[9px] text-center">20</div>
      </div>

<!-- ------end pagination ------  -->

      <div class="rounded-[6px] w-[40px] h-[41px] text-center  cursor-pointer flex items-center justify-center">

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 68 68" fill="none">
          <g filter="url(#filter0_d_25_592)">
            <path d="M42 50C47.6569 50 50.4853 50 52.2426 48.2426C54 46.4853 54 43.6569 54 38L54 22C54 16.3431 54 13.5147 52.2426 11.7574C50.4853 10 47.6569 10 42 10H26C20.3431 10 17.5147 10 15.7574 11.7574C14 13.5147 14 16.3431 14 22L14 38C14 43.6569 14 46.4853 15.7574 48.2426C17.5147 50 20.3431 50 26 50H42Z" fill="white" shape-rendering="crispEdges"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2476 29.7831L30.7498 25.8391C30.4169 25.5468 30.4169 25.0754 30.7498 24.7831C30.9084 24.6435 31.1248 24.565 31.3504 24.565C31.5761 24.565 31.7925 24.6435 31.9511 24.7831L37.0496 29.2544C37.3835 29.5463 37.3835 30.0184 37.0496 30.3104L31.9513 34.7816C31.7925 34.9212 31.5761 34.9998 31.3504 34.9998C31.1248 34.9998 30.9084 34.9212 30.7496 34.7816C30.4169 34.4893 30.4169 34.0178 30.75 33.7256L35.2476 29.7831Z" fill="#2F80ED"/>
          </g>
          <defs>
            <filter id="filter0_d_25_592" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_592"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_592" result="shape"/>
            </filter>
          </defs>
        </svg>

      </div>

    </div>

  <!-- end cards -->

  </div>

  <!-- end flex 1 -->

  </div>

  <!-- /////////////////////end body/////////////////////// -->

    <div class="top-[unset] h-[72px] w-full mb-[70px]">
        <HomeAlert class=" top-[unset] "  />
    </div>

    <div class=" ">
      <div class="bottom-0">
        <HomeListFooter />
      </div>
    </div>

  </div>

  <div class="relative bottom-0 left-0 w-full ">
        <footerlastbtm  class="absolute  left-0 bottom-0 w-[100%] " />
  </div>

</template>

<script setup>

//  we will use these endpoints:
// - Search Hotels
// - Get Sort By
// - Get Hotel Details

import HomeSearch from '../HomePageCompos/HomeSearch.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import footerlastbtm from '../footerlastbtm.vue';
import { ref, defineProps } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

import SearchResultsRightDonSide from './SearchResultsRightDonSide.vue';
import SearchResultsLeftSideVue from './SearchResultsLeftSide.vue';
import SearchResultsRightSidTop  from './SearchResultsRightSidTop.vue';
import SearchResultsNavVue from './SearchResultsNav.vue';

// const routes = [
//   {
//     path: '/searchres',
//     name: 'searchres',
//     component: () => import('@/path/to/SearchResults.vue'),
//     props: route => ({
//       city: route.query.city,
//       checkin: route.query.checkin,
//       checkout: route.query.checkout,
//       guests: route.query.guests,
//       rooms: route.query.rooms,
//     }),
//   },
// ];

// const modalActiveSerch = ref(false);
// const toggleModal = () => {
//   modalActive.value = !modalActive.value
// }

const props = defineProps({
  city: String,
  checkInDate: String,
  checkOutDate: String,
  guests: Number,
  rooms: Number,
  modalActive: {
    type: Boolean,
    default: false,
  }
});


// /////////////////////

const searchResults = ref(null);

onMounted(async () => {
  // Call your API and set the searchResults
  searchResults.value = await fetchSearchResults();
});

const fetchSearchResults = async () => {
  
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    params: {
      dest_id: '20123249',
      search_type: ' city',
      arrival_date: '2023-11-28',
      departure_date: '2023-11-30',
      adults: '1',
      children_age: '0,17',
      room_qty: '1',
      page_number: '1',
      languagecode: 'en-us',
      currency_code: 'AED'
    },
    headers: {
      'X-RapidAPI-Key': '6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }

  };

  try {
    const response = await axios.request(options);
    console.log("response.data",response.data);
  } catch (error) {
    console.error(error);
  }

};

// window.addEventListener('load', searchHotels);

// ////////////

</script>

<style scoped>
input{
  background-color: unset !important;
}
button{
  transition: all 0.3s ease-in;
}

</style>