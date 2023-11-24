<template>
  <div>

    <div class="container m-auto flex flex-col  ">

      <NavSecndry />
<!-- <NavSignined/> -->

      <div class="flex flex-col items-center m-auto w-[401px]  mt-[92px] ">
        <h2 class="text-[28px] mb-[40px]  font-[600] " >Sign In</h2>
        <form class="flex flex-col gap-[20px] m-auto w-[401px] ">

            <div class="flex flex-col gap-[4px] rounded-[4px]">
              <label class="text-dark-black font-[500] text-[14px]" >Email address</label>
              <input class=" w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px] "
               type="email" name="email" placeholder="Email" required >
            </div>
            
              <div class="flex flex-col gap-[4px] rounded-[4px]">

                <label  class="text-[14px] text-dark-black font-[500]  " >Password</label>

                <div class="flex justify-between rounded-[4px] gap-[12px] items-center w-[400px]
                    bg-inputsGray pt-[11px] pb-[12px] px-[12px]  ">
                  <input class=" "
                   type="password" name="password" placeholder="Password" required >
                  <img class="w-[20px] h-[20px] cursor-pointer " src="../assets/icons/eye 1.svg" alt="password">
                </div>

              </div>

              <input class="bg-primary text-white rounded-[6px] mt-[33px] w-[100%] pt-[11px] pb-[12px] cursor-pointer " 
               type="submit" value="Sign in" >

        </form>

        <div class="mt-[20px] text-[16px] ">
          <p>Don’t have an account? <a class="text-primary" href="/register" > Register </a> </p>
        </div>
      
      </div>

      <div class="absolute left-0 bottom-0 w-full " >
        <footerlastbtm />
      </div>

    </div>
  </div>
</template>

<script setup>
import NavSecndry from './Navs/NavSecndry.vue';
//import NavSignined from './NavSignined.vue';
import footerlastbtm from './footerlastbtm.vue';
</script>
