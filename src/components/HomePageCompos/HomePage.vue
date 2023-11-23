<template>

  <!-- <div class=" relative left-[100px] mx-auto  	 "> -->

          <!-- <footerlastbtm/> -->

    <div class="container ">

    <!-- the hero home img and the text -->

      <div class=" 	 ">
        <HomePageHeroImg/>

          <!-- small box in the home img  -->
 
          <!-- end small box in the home img  -->
      </div>
    <!-- end the hero home img and the text  -->

    <!-- enjoy section starting  -->
    <div class=" ">
      <EnjoySec />
    </div>
    <!-- end enjoy  -->

    <div class="">
      <GetInspirationSec/>
    </div>

    <div class="">
        <PopularHotelsSec />
    </div>

    <!-- <div class="">
        <HomeDownloadSec/>
    </div> -->

    <div class="">
        <HomeFooter />
    </div>


   </div>
   
</template>


<script setup>

import EnjoySec from './EnjoySec.vue';
// import HomeAlert from './HomeAlert.vue';
// import HomeSearch from './HomeSearch.vue';
import HomePageHeroImg from './HomePageHeroImg.vue';
import GetInspirationSec from './GetInspirationSec.vue';
import PopularHotelsSec from './PopularHotelsSec.vue';
// import HomeDownloadSec from './HomeDownloadSec.vue';
import HomeFooter from './HomeFooter.vue';
// import footerlastbtm from "../../components/footerlastbtm.vue";

</script>


<style  scoped>


</style>