<template>
  <div   >
    <!-- <div class="h-[100vh] " > -->

    <div class="mb-[92px]">
      <!-- <div class=" "> -->
      <NavSignined   />
    </div>

  <div class="relative bottom-0 m-auto w-[calc(100%-100px)] bg-orange-400 p-2  " >  


      <div class="bg-pink-600 p-2   ">

        <!-- <div class="bg-pink-600 p-2 flex h-[452px] gap-[20px] "> -->

        <!-- <div class="w-[70%]">

          <div class="w-[100%] h-full">
            <img src="../../assets/imgs/d1.png" alt="d1">
          </div>
          
        </div>

        <div class="w-[30%] ">
           <div class="flex flex-col  gap-[16px] mb-[16px]">
            <div class="h-[218px]  ">
               <img class=" " src="../../assets/imgs/d2.png" alt="d2">
            </div>
             <div class=" h-[218px]  ">
               <img class="w-full h-full " src="../../assets/imgs/d3.png" alt="d3">
             </div>
          </div>

        </div>


          <div class="bg-bggraynstedpage">

          </div> -->

      </div>

      <div class="relative bottom-[0px] w-[full] bg-green-500 p-1">
          <div class="top-[unset] h-[72px] w-full mb-[70px]">
            <HomeAlert class=" top-[unset] "  />
          </div>
          <div class="bottom-0">
            <HomeListFooter />
          </div>
      </div>
      
  </div>

  <div class="relative bottom-0 left-0 w-full ">
    <footerlastbtm  class="absolute  left-0 bottom-0 w-[100%] " />
  </div>


  </div>
</template>

<script setup>
import NavSignined from '../Navs/NavSignined.vue' 
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import footerlastbtm from '../footerlastbtm.vue';
</script>
