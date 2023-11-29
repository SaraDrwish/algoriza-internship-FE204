<template>
    <div v-if="loading" class=" relative z-10  ">
    <div class="absolute left-[40%] mt-[2%] max-w-[400px] px-[24px] pb-[28px] pt-[50px] max-h-[500px] 
    flex flex-col text-center gap-[45px] bg-white rounded-[10px]  "> 
    
      <div class="bg-welcomeBlue w-[240px]  pt-[15px]  h-[200px] m-auto rounded-[100px] flex items-center justify-center relative">
        <img class=" absolute left-[98px] w-[112px] h-[192px] " src="../../assets/icons/Frame.svg" alt="iconwelcom1">
        <img class=" absolute left-[32px] w-[112px] h-[192px] " src="../../assets/icons/Frame (1).svg" alt="welcom icon 2">
      </div>
      <div class="">
        <h4 class="text-[20px] text-dark-black font-[600] mb-[12px]" >Welcome to My Dream Place</h4>
        <p class="text-[16px] text-light-black">You can now enjoy your travel experience with easy access to resources and more</p>
      </div>
      
      <div class="">
        <button @click="hideComponent" class="w-full py-[12px] px-[18px] bg-primary text-white text-[15px] " >Get Started</button>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { authService } from '../../auth';

const loading = ref(true);

onMounted(async () => {
  await authService.simulatedAsyncCheck();
  loading.value = true;
});

const hideComponent = () => {
  loading.value = true;
};

// onMounted(() => {
//   loading.value = false;
// });

</script>
