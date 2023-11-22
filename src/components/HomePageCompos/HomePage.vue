<template>
  <!-- <div class=" relative left-[100px] mx-auto  	 "> -->
    <div class="container  ">

    <!-- the hero home img and the text -->
      <div class=" 	 ">
        <HomePageHeroImg/>
          <!-- small box in the home img  -->
          <!-- <div class="absolute "> 
            <HomeSearch />
          </div>  -->
          <!-- end small box in the home img  -->
      </div>
    <!-- end the hero home img and the text  -->


    <!-- start danger alert  -->
    <!-- <div class="">
      <HomeAlert />
    </div> -->
    <!-- end  danger alert  -->

    <!-- enjoy section starting  -->
    <div class=" ">
      <EnjoySec />
    </div>
    <!-- end enjoy  -->

   </div>
</template>

<script setup>
import EnjoySec from './EnjoySec.vue';
// import HomeAlert from './HomeAlert.vue';
// import HomeSearch from './HomeSearch.vue';
import HomePageHeroImg from './HomePageHeroImg.vue';
</script>

<style  scoped>


</style>