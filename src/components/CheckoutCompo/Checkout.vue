<template>
  <div class="bg-bggraynstedpage py-2 ">

    <div class="  bg-yellow-500  mt-[128px] mb-[141px]  ">

      <NavSigninedSecndry  />

    <div class="p-2 bg-pink-400 m-auto w-[calc(100%-100px)]  ">

      <p class="text-[32px] font-[600] text-checkoutText1 mb-[30px]">Secure your reservation</p>
        
      <div class="relative top-[1px] h-[72px] bg-orange-700 p-2">
        <CheckoutAlert/>
      </div>


      <div class="bg-orange-300 p-2 flex gap-[30px] mt-[130px]">

        <!-- start left big div -->
            
          <ChaeckoutLeft/>

        <!-- end left big div -->
        

        <!-- start right big div -->
        <div  class="flex-2 flex flex-col gap-[30px] w-1/3 " >
          <ChaeckoutRight/>       
        </div>
        <!-- end right big div -->

      </div>

    </div>


  </div>


  </div>
</template>

<script setup>
import NavSigninedSecndry from '../Navs/NavSigninedSecndry.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
import ChaeckoutRight from './ChaeckoutRight.vue';
import ChaeckoutLeft from './ChaeckoutLeft.vue';
import CheckoutAlert from './CheckoutAlert.vue'
</script>

<style scoped>
/* p{
  color: #F4F4F4;
} */
</style>