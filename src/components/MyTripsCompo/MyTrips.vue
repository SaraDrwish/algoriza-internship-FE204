<template>
  <div class=" min-h-[100vh] max-w-[100vw] relative bg-green-300 flex items-center justify-between mx-auto">

    <div class="">
      <NavSignined/>
    </div>

<!-- start container -->
   <!-- left-1/2 transform -translate-x-1/2 -->
    <div class="bg-pink-600 p-2 text-center w-full max-w-[calc(100%-200px)]
     flex flex-col mx-auto absolute 
         " >
     

      <p class="text-[32px] font-[600] text-checkoutText1">My trips</p>
      
      <div class="bg-orange-500 p-4 ">

        <!-- //start small divs  -->

        <div class="">

          <div class="">

          </div>

          <div class="">

          </div>

        </div>

        <!-- //end small divs  -->
       

    </div>

  </div>

<!-- end the container -->
  

    <!-- start footer -->

    <div class="bg-slate-600 p-2  w-[calc(100%-200px)] absolute bottom-0
      left-1/2 transform -translate-x-1/2 " >
      <HomeAlert/>
      <HomeListFooter/>
    </div>

    <div class=" w-full absolute left-0 bottom-0 overflow-hidden ">
      <footerlastbtmVue/>
    </div>

    <!-- end footer -->

  </div>
</template>

<script setup>

import footerlastbtmVue from '../footerlastbtm.vue';
import NavSignined from '../Navs/NavSignined.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';

</script>

<style  scoped>

</style>