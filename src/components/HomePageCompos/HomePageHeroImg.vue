<template>
  <div class="">
    <div class="relative mt-[80px] h-[704px]  ">
      <div class=" flex h-[500px] overflow-hidden  ">
              <div class="relative h-full w-full "> 
                <div class="rounded-[10px] overflow-hidden bg-black opacity-30  h-full w-full absolute "> </div> 
                <img class="object-cover rounded-[10px] h-full w-full " src="../../assets/imgs/mainPAgeHomeImg.jpeg" alt="home main image">
              </div> 
              <div class="heroImg  
                absolute top-[190px] left-[calc(100vh/2)] 
                flex flex-col justify-center items-center gap-[20px] mx-auto z-100 text-center text-white ">
                <h3 class="text-[32px] font-bold">Enjoy Your Dream Vacation</h3>
                <p class="text-[20px] w-[650px] line-h-28 ">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
              </div>

              <!--  -->
              <div class="absolute top-[468px]   "> 
                <HomeSearch />
              </div>
              <!--  -->

          </div>

          <div class="  	">
            <HomeAlert />
          </div>

    </div>

  </div>  
</template>

<script setup>
import HomeAlert from './HomeAlert.vue';
import HomeSearch from './HomeSearch.vue';
</script>
