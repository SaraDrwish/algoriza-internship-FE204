<template>
  <div class=" mt-[80px] mx-auto">

  
<!-- the img and the text -->
      <div class=" flex fixed left-[100px] w-[calc(100%-200px)] h-[500px] flex-shrink-0 ">
          <div class="  h-full w-full  "> 
            <div class="overlay-home rounded-[10px] overflow-hidden bg-black opacity-30  h-full w-full absolute "> </div> 
            <img class="rounded-[10px] h-full w-full " src="../assets/imgs/mainPAgeHomeImg.jpeg" alt="home main image">
          </div> 
          <div class=" absolute left-[25%] top-[50%] w-[50%] m-auto z-100 text-center text-white  ">
            <h3 class="text-[32px] font-bold">Enjoy Your Dream Vacation</h3>
            <p class="text-[20px] line-h-28 ">Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
          </div>
      </div>

<!-- small box in the img  -->
  <div class=" container relative"> 

      <div class=" fixed left-[205px] bottom-[15%] w-[calc(100%-410px)] h-[64px] bg-red-200 p-4 ">
        <form action="#" class=" flex rounded-[8px]  gap-[15px] bg-red-500 ">
          <div class="flex gap-[10px]   bg-green-200 rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
            <img src="../assets/icons/location 1.svg" alt="location-icon">
            <input class="text-[13px]" type="text" placeholder="Where are you going?">
          </div>

          <div class="flex gap-[10px]   bg-green-200 rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
            <img src="../assets/icons/calendar 1.svg" alt="calendar-icon">
            <input class="text-[13px] " type="text" placeholder="Check in date">
          </div>

          <div class="flex gap-[10px]   bg-green-200 rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
            <img src="../assets/icons/calendar 1.svg" alt="calendar-icon">
            <input class="text-[13px]" type="text" placeholder="Check out date">
          </div>

          <div class="flex gap-[10px]   bg-green-200 rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
            <img src="../assets/icons/user-square 1.svg" alt="user-icon">
            <input class="text-[13px]" type="text" placeholder="Guests">
          </div>

          <div class="flex gap-[10px]   bg-green-200 rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
            <img src="../assets/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg" alt="single_bed">
            <input class="text-[13px]" type="text" placeholder="Rooms">
          </div>

          
          <input class="flex  bg-primary py-[12px] px-[18px]  rounded-[6px]" type="submit" value="search">

        </form>
      </div>
      
    </div> 

    <!-- danger alert  -->

    <div class="flex items-center rounded-[8px] fixed bottom-4 left-[100px] h-[72px] py-[20px] pl-[24px] gap-[19px] w-[calc(100%-200px)] bg-yellow-100 ">
      <div class="flex items-center py-[5px]   ">
        <img class="w-[32px] h-[32px] " src="../assets/icons/danger 1.svg" alt="danger">
      </div>
      <p>Check the latest COVID-19 restrictions before you travel .  <a href="#" class="text-primary"> Learn more </a> </p>
    </div>

   </div>
</template>

<script setup>

</script>

<style  scoped>

/* img{
  background:
   linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%,
    rgba(0, 0, 0, 0.30) 100%), url("../assets/imgs/mainPAgeHomeImg.jpeg"),
       lightgray 0px -72.075px / 100% 165.959% no-repeat;
} */

</style>