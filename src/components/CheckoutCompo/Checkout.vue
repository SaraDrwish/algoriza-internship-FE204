<template>
  <div class="bg-gray-800 py-2 ">

    <!-- <div class="  bg-yellow-500   "> -->
      <div class="  bg-yellow-500  mt-[128px]  ">

      <!-- <div class="bg-red-500 p-2 h-[72px]    "> -->
        <NavSigninedSecndry  />
      <!-- </div> -->

      <div class="p-2 bg-pink-400 m-auto w-[calc(100%-100px)]  ">
        <!-- <div class="bg-bordersr m-auto w-[calc(100%-100px)]  "> -->

        <p class="text-[32px] font-[600] text-checkoutText1 mb-[30px]">Secure your reservation</p>

          

        <!-- <div class="bg-green-500 p-2 "> -->

          <div class="relative">
            <!-- <div class="absolute w-full bottom-unset h-[72px] mb-[30px] bg-slate-500 p-2 "> -->
              <HomeAlert class="top-1" />
            <!-- </div> -->
          </div>

        <!-- </div> -->



        <div class="bg-orange-300 p-2 flex gap-[30px] mt-[130px]">

          <!-- start left big div -->

            <div class="bg-slate-500 p-2 flex-1 flex flex-col gap-[30px]">
            
            </div>


          <!-- end left big div -->
          

          <!-- start right big div -->

            <div  class="bg-orange-900 p-2 flex-2 flex flex-col gap-[30px] w-1/3 " >

               <div class="bg-yellow-600 p-2">

                <div class="bg-green-800 p-2 ">
                  <img src="../../assets/imgs/d3.png" alt="d3">
                 </div>
                 <div class="bg-green-600 p-2 ">
                  <p>Lakeside Motel Warefront</p>
                 </div>

               </div>

               <div class="bg-yellow-400 p-2">

                <div class="bg-green-900 p-2 ">
                  <p>Price Details</p>
                </div>
                <div class="bg-green-400 p-2 ">
                  <ul>
                    <li>
                      <p></p>
                      <span></span>
                    </li>

                    <li>
                      <p></p>
                      <span></span>
                    </li>

                    <hr>

                    <li>
                      <p></p>
                      <span></span>
                    </li>

                  </ul>
                </div>
                
              </div>


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
</script>

<style scoped>
 
</style>