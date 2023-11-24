<template>
  <div>

<!-- /////////// -->

   <div class="container m-auto flex flex-col ">

      <NavSecndry />

      <div class="w-[401px] m-auto flex flex-col items-center">

        <h2 class="text-[28px] mb-[40px] mt-[92px] font-[600] " > Register </h2>

        <form class="flex flex-col gap-[20px] m-auto w-[401px] " >

            <div class="flex flex-col gap-[4px]">
                <label class="text-dark-black font-[500]  text-[14px]" >Email address</label>
                <input class="w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px]" type="email" name="email" placeholder="Email" required >
            </div>

            <div class="flex flex-col gap-[4px]">
              <label  class="text-dark-black font-[500]  text-[14px]" >Password</label>
              <div class="flex justify-between rounded-[4px] gap-[12px] items-center w-[400px]
                bg-inputsGray pt-[11px] pb-[12px] px-[12px]  ">
                <input class=" "
                  type="password" name="password" placeholder="Password" required >
                <img class="w-[20px] h-[20px] cursor-pointer " src="../assets/icons/eye 1.svg" alt="password">
              </div>
            </div>

            <div class="flex flex-col gap-[4px]">
              <label class="text-dark-black font-[500]  text-[14px]" >Confirm password</label>
              <div class="flex justify-between rounded-[4px] gap-[12px] items-center w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px]">
                <input class=" " type="password" name="password" placeholder="Confirm Password" required >
                <img class="w-[20px] h-[20px] cursor-pointer " src="../assets/icons/eye 1.svg" alt="password">
              </div>
            </div>

            <input class="bg-primary text-white rounded-[6px] 
             w-[100%] pt-[11px] pb-[12px] cursor-pointer mt-[33px]  " 
             type="submit" value="Submit" >

           </form>

           <div class="text-center mt-[20px] text-[16px] ">
             <p>Already have an account? <a class="text-primary" href="/signin"> Sign in </a> </p>
           </div>
          
      </div>

    </div>

    <div class="absolute bottom-0 w-full " >
      <footerlastbtm />
    </div>
              
<!-- ////////// -->

  </div>
</template>

<script setup>
import NavSecndry from './Navs/NavSecndry.vue'
import footerlastbtm from './footerlastbtm.vue';
</script>
