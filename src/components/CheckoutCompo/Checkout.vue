<template>
  <div class="">

    <div class="p-2 bg-yellow-500    ">

      <div class="bg-red-500 p-2 h-[72px]    ">
        <NavSigninedSecndry  />
      </div>

      <div class="p-2 bg-pink-400 m-auto w-[calc(100%-100px)]     ">
        <!-- <div class="bg-bordersr m-auto w-[calc(100%-100px)]  "> -->

        <p class="text-[32px] font-[600] text-checkoutText1 ">Secure your reservation</p>

        <div class="bg-green-500 p-2 ">

          <div class="relative bottom-unset  bg-slate-500 p-2 ">
            <HomeAlert class="  bottom-unset " />
          </div>

          <div class="bg-orange-200 p-2 flex gap-[30px]">

            <!-- start left big div -->
             <div class="bg-orange-400 p-2 flex-1 flex flex-col gap-[30px]">
              
            </div>


            <!-- end left big div -->
            

            <!-- start right big div -->

             <div  class="bg-orange-500 p-2 flex-2 flex flex-col gap-[30px] " >

             </div>

            <!-- end right big div -->

          </div>


        </div>

      </div>


    </div>


  </div>
</template>

<script setup>
import NavSigninedSecndry from '../Navs/NavSigninedSecndry.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
</script>

<style scoped>
 
</style>