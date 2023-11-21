<template>
  <div class="">
        <div class=" relative left-[105px] w-[calc(100%-105px)]  h-[64px]  ">
          <!-- <div class="absolute left-[205px] bottom-[15%] w-[calc(100%-410px)] h-[64px]  "> -->
          <form action="#" class=" flex rounded-[8px]  gap-[15px] shadow-lg bg-white pt-[10px] pb-[11px] pr-[13px] pl-[12px] ">
            <div class="flex gap-[10px]  w-[206px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/location 1.svg" alt="location-icon">
              <input class="text-[13px]" w-full type="text" placeholder="Where are you going?">
            </div>

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              <input class="text-[13px] w-full" type="text" placeholder="Check in date">
            </div>

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              <input class="text-[13px] w-full " type="text" placeholder="Check out date">
            </div>

            <div class="flex gap-[10px]  bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/user-square 1.svg" alt="user-icon">
              <input class="text-[13px] w-full " type="text" placeholder="Guests">
            </div>

            <div class="flex gap-[10px]  bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg" alt="single_bed">
              <input class="text-[13px] w-full " type="text" placeholder="Rooms">
            </div>
          
            <input class="flex tracking-[0.3px] w-[137px] justify-center bg-primary text-[15px] text-white  
             cursor-pointer py-[12px] px-[18px]
             rounded-[6px]" type="submit" value="Search">

          </form>
        </div>
  </div>
</template>


<style scoped >
input[type="submit"] {
  transition: all 0.3s ease;
}
</style>


<script setup>

</script>

