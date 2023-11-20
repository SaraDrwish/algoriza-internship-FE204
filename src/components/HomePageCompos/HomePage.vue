<template>
  <div class=" mt-[80px] mx-auto">

<!-- the img and the text -->
      <div class=" flex fixed left-[100px] w-[calc(100%-200px)] h-[500px] flex-shrink-0 ">
          <div class="  h-full w-full  "> 
            <div class="overlay-home rounded-[10px] overflow-hidden bg-black opacity-30  h-full w-full absolute "> </div> 
            <img class="rounded-[10px] h-full w-full " src="../../assets/imgs/mainPAgeHomeImg.jpeg" alt="home main image">
          </div> 
          <div class=" absolute left-[25%] top-[50%] w-[50%] m-auto z-100 text-center text-white  ">
            <h3 class="text-[32px] font-bold">Enjoy Your Dream Vacation</h3>
            <p class="text-[20px] line-h-28 ">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
          </div>
      </div>


<!-- small box in the home img  -->
  <div class=" container relative"> 
    <HomeSearch/>
  </div> 
<!-- end small box in the home img  -->


    <!-- start danger alert  -->
    <HomeAlert/>
    <!-- end  danger alert  -->

   </div>
</template>

<script setup>
import HomeAlert from './HomeAlert.vue';
import HomeSearch  from './HomeSearch.vue';
</script>

<style  scoped>

 

</style>