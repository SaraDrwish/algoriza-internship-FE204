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


  <!-- ------start pagination ------  -->


    <div class=" ">

       <SearchResultsPagination/>

    </div>

  <!-- ------end pagination ------  -->


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
import SearchResultsPagination from './SearchResultsPagination.vue';

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

// const fetchSearchResults = async () => {

//   const options = {
//     method: 'GET',
//     url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
//     params: {
//     dest_id: '-2092174',
//     search_type: 'CITY',
//     arrival_date:  ,
//     departure_date:  ,
//     adults: '1',
//     children_age: '0,17',
//     room_qty: '1',
//     page_number: '1',
//     languagecode: 'en-us',
//     currency_code: 'AED'
//     },
//     headers: {
//       'X-RapidAPI-Key': '52d9ce7503mshb0dfbdcfb3bcaf8p12dfabjsn97b7216b41ea',
//       'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
//     },

//   }

//   try {
//     const response = await axios.request(options);
//     console.log("response.data",response.data);
//   } catch (error) {
//     console.error("error" , error);
//   }

// };


const handleSearch = async () => {

  if (!checkInDate.value || !checkOutDate.value) {
    alert('Please select both arrival and departure dates.');
    return;
  }

  try {
    const response = await fetchHotelData({
      dest_id: '-2092174',
      search_type: 'CITY',
      arrival_date: checkInDate.value,
      departure_date: checkOutDate.value,
      adults: '1',
      children_age: '0,17',
      room_qty: '1',
      page_number: '1',
      languagecode: 'en-us',
      currency_code: 'AED',
    });

    console.log(response);
  } catch (error) {
    console.error('Error fetching hotel data:', error);
  }
};


// /////////////////////////////////////////////////////////////////////////

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