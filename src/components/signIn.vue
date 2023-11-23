<template>
  <div>

    <div class="container m-auto flex flex-col  ">

      <NavSecndry />
          <!-- <NavSignined/> -->
      <div class="flex flex-col items-center m-auto w-[401px]">
        <h2 class="text-[28px] mb-[40px] mt-[92px] " >Sign In</h2>
        <form class="flex flex-col gap-[44px] m-auto w-[401px] ">

            <div class="flex flex-col gap-[4px]">
              <label  class="text-[14px]" >Email address</label>
              <input type="email" name="email" placeholder="email" required >
            </div>
            
              <div class="flex flex-col gap-[4px]">
                <label  class="text-[14px]" >Password</label>
                <div class="flex w-full">
                  <input type="password" name="password" placeholder="password" required >
                  <img class="w-[20px] h-[20px]" src="../assets/icons/eye 1.svg" alt="">
                </div>
              </div>
              <input class="bg-primary text-white rounded-[6px] w-[100%] pt-[11px] pb-[12px] "  type="submit" value="sign in" >

        </form>

        <div class="mt-[20px]">
          <p>Don’t have an account? <a class="text-primary" href="/register"> Register </a> </p>
        </div>
      
      </div>


    </div>
  </div>
</template>

<script setup>
import NavSecndry from './NavSecndry.vue'
import NavSignined from './NavSignined.vue'
</script>
