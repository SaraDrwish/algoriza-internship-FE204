<template>
  <div class="">
        <div class=" relative left-[105px] w-[calc(100%-205px)]  h-[64px]  ">
           <form action="#" class=" flex rounded-[8px]  gap-[15px] shadow-lg bg-white pt-[10px] pb-[11px] pr-[13px] pl-[12px] ">
           
            <div class="bigsearchdropdnbox relative w-[286px] text-[13px]">

              <div class="flex bg-inputsGray   rounded-[4px]  ">

                <div class="flex items-center  gap-[10px]  mx-[12px] mt-[11px] mb-[12px]">
                  <img class="flex " src="../../assets/icons/location 1.svg" alt="location-icon">
                  <input class="flex  w-[100%]" type="text" placeholder="Where are you going ?" required>
                    <span @click="toggleModal" class="flex cursor-pointer  ">
                      <svg  v-show="!modalActive"  xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                          <path d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <svg  v-show="modalActive" xmlns="http://www.w3.org/2000/svg" 
                          width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655" 
                          stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                 </div>

               
              
              </div>

              <!-- .starting a drpodon -->

              <div v-if="modalActive" class="absolute top-[70px] z-10 flex bg-inputsGray w-full  rounded-[10px]  ">
                 <ul class=" flex items-center capitalize transition ease-in duration-400 text-light-black w-full justify-center text-center flex-col gap-[4px] mx-[12px] ">
                  <a class="hover:transition-all transition ease-in duration-400 hover:text-primary w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer" href="#" >
                    <li class=" ">cairo</li>
                  </a>
                  <li class="hover:transition-all transition ease-in duration-400 hover:text-primary w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer ">Giza</li>
                  <li class=" hover:transition-all ease-in duration-400 hover:text-primary w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer ">Aswan</li>
                 </ul>
              </div>

            </div>

          

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              <input class="text-[13px] w-full" type="text" placeholder="Check in date" required >
            </div>

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              <input class="text-[13px] w-full " type="text" placeholder="Check out date" required >
            </div>

            <div class="flex gap-[10px]  bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/user-square 1.svg" alt="user-icon">
              <input class="text-[13px] w-full " type="text" placeholder="Guests" >
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
li:last-child { border-bottom: none; }

</style>


<script setup>

import { ref } from 'vue';

const modalActive = ref(null);

const toggleModal = () => {
  modalActive.value = !modalActive.value
}

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
    }
  })


</script>

