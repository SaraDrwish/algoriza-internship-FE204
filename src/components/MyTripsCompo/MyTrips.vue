<template>
  <div class=" mt-[128px] bg-green-300 relative  ">

    <div class="">
      <NavSignined/>
    </div>

<!-- start container -->
 
  <div class="bg-pink-600 p-2 m-auto w-[calc(100%-100px)] " >
      
      <div class="bg-orange-500 p-2 ">

        <!-- //start small divs and small container  -->

        <div class="flex flex-col gap-[24px] p-2 bg-purple-400 m-auto w-[calc(100%-210px)] mb-[577px] " >
          
          <p class="text-[32px] font-[600] text-checkoutText1 mb-[28px]">My trips</p>
          <div class=" w-[1030px] h-[240px] bg-blue-400  flex gap-[24px]" >

            <div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
            <div class="flex-2  rounded-[5px] ">
                <img src="../../assets/imgs/1010.png" alt="1010trp">
            </div>
            <div class="flex flex-1 ">
              <div class=" flex-1 p-2">
                <p class="text-[20px] font-[500]">Ocean Waves Resort</p>
                <div class="flex gap-[12px] mb-[17px]">
                  <span class="flex"> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/srhv.svg" alt="strhf">
                  </span>
                  <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                </div>
                <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
                <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
                  and a late checkout. Gym included. Flexible cancellation applies</p>
                <button class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
              </div>
              <div class="flex items-end flex-col flex-2 text-right justify-end ">
  
                <div class="flex gap-[8px] font-[500]  items-center  ">
                  <span class="text-[20px]">$310</span>
                </div>
                <p class="mt-[6px]"> Includes taxes and fees </p>
              </div>
            </div>
      
          </div>
            
        </div>

        <!-- ///////////////// -->

        <div class="">

        </div>

    </div>

        <!-- //end small divs  -->
  
        <!-- start footer -->

          <div class="relative w-full  ">
            <HomeAlert class="top-[unset] "/>
          </div>

          <div class="bg-slate-600 p-2  bottom-0  " >
            <HomeListFooter/>
          </div>
          
        <!-- end footer -->
        </div>

      </div>
   

  <!-- end the container -->

    <div class=" ">
      <footerlastbtmVue class="absolute bottom-0 w-full"/>
    </div>

  </div>
</template>

<script setup>

import footerlastbtmVue from '../footerlastbtm.vue';
import NavSignined from '../Navs/NavSignined.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';

</script>
