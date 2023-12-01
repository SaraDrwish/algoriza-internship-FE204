<template>
  <div class="bg-gray-800 py-2 ">

  <!-- <div class="  bg-yellow-500   "> -->
    <!-- <div class=" bg-yellow-500  mt-[128px] "> -->
      <div class="  bg-yellow-500  mt-[128px] mb-[141px]  ">

    <!-- <div class="bg-red-500 p-2 h-[72px]    "> -->
      <NavSigninedSecndry  />
    <!-- </div> -->

    <div class="p-2 bg-pink-400 m-auto w-[calc(100%-100px)]  ">
      <!-- <div class="bg-bordersr m-auto w-[calc(100%-100px)]  "> -->

      <p class="text-[32px] font-[600] text-checkoutText1 mb-[30px]">Secure your reservation</p>

        
      <!-- <div class="bg-green-500 p-2 "> -->

      <div class="relative ">
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

        <div  class="flex-2 flex flex-col gap-[30px] w-1/3 " >

            <div class="bg-white rounded-b-[6px] rounded-t-[6px] ">

              <div class="mb-[20px]  ">
                <img class="rounded-t-[6px]" src="../../assets/imgs/d3.png" alt="d3">
              </div>
              <div class="pl-[20px] pb-[20px] ">
                <p class="mb-[10px]" >Lakeside Motel Warefront</p>
                <!-- ///starts and viwes div //// -->
                <div class="flex gap-[12px] mb-[25px]">
                  <span class="flex"> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/srhv.svg" alt="strhf">
                  </span>
                  <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                </div>
                <!-- ////end stars and wies div /// -->
                <p class="text-srchRed text-[14px] mb-[8px] " >Non refundable</p>
                <div class="text-[14px] text-light-black flex flex-col gap-[8px]">
                  <p class="  " >Check in: Sunday, March 18, 2022</p>
                  <p class="  " >Check out: Tuesday, March 20, 2022</p>
                  <p class="  " >2 night stay</p>
                </div>
              
              </div>

            </div>

            <div class=" ">

            <div class="bg-CeckoutGreen rounded-t-[6px] p-[18px] ">
              <p class="text-[16px] font-[500] text-checkoutText1 " >Price Details</p>
            </div>
            <div class="bg-white rounded-b-[6px] border-x-2 border-b-2 border-borderserbox  ">
              <ul class="flex px-[18px] pt-[18px] pb-[20px] flex-col gap-[12px] text-light-black">
                <li class="flex justify-between ">
                  <p>1 room X 2 nights</p>
                  <span>$ 120.32</span>
                </li>

                <li class="flex justify-between " >
                  <p>Tax and service fees</p>
                  <span>$ 8.32</span>
                </li>
              </ul>
              <hr>

              <div class="flex justify-between px-[18px] pb-[23px] pt-[25px] text-checkoutText1  ">
                <p class="text-[16px] font-[500]" >Total</p>
                <span class="text-[20px] font-[600] ">$130</span>
              </div>

             
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