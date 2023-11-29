<template>
  <div class=" min-h-[100vh] max-w-[100vw] relative bg-green-300 flex items-center justify-between mx-auto">

    <div class="">
      <NavSignined/>
    </div>

    <div class="bg-pink-600 p-2 text-center w-full max-w-[calc(100%-100px)]
     flex flex-col items-center justify-center mx-auto absolute 
        left-1/2 transform -translate-x-1/2  " >
     

      <p class="text-[32px] font-[600] text-checkoutText1">My trips</p>
      <div class="bg-orange-500 p-2">

        <!-- //start small divs  -->

        <div class="">

          <div class=""></div>
          <div class=""></div>

        </div>

        <!-- //end small divs  -->
       

    </div>

<!-- end the container -->


    </div>

    <!-- start footer -->

    <!-- top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -->

    <div class="bg-slate-600 p-2  w-[calc(100%-100px)] absolute bottom-0
      left-1/2 transform -translate-x-1/2 " >
      <HomeListFooter/>
    </div>

    <div class=" w-full absolute left-0 bottom-0 overflow-hidden ">
      <!-- <div class="bg-slate-400 w-full p-2 absolute left-0 bottom-0 "> -->
      <footerlastbtmVue/>
    </div>

  <!-- end footer -->

  </div>
</template>

<script setup>

import footerlastbtmVue from '../footerlastbtm.vue';
import NavSignined from '../Navs/NavSignined.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';

</script>

<style  scoped>

</style>