<template>
  <div class="pt-[128px] bg-bggraynstedpage relative ">

    <div class="">
      <NavSignined/>
    </div>

<!-- start container -->
 
  <div class=" m-auto w-[calc(100%-100px)] " >
      
      <div class="  ">

        <!-- //start small divs and small container  -->

        <div class="flex flex-col gap-[24px]  m-auto w-[calc(100%-210px)] mb-[577px] " >

          <p class="text-[32px] font-[600] text-checkoutText1 mb-[28px]">My trips</p>
          
          <div class=" flex gap-[24px]" >

            <div class="flex gap-[24px] w-full rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
            <div class="flex-2  rounded-[5px] ">
                <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/1010.png" alt="1010trp">
            </div>
            <div class="flex flex-1  justify-between ">
              <div class="  w-1/3 ">
                <p class="text-[20px] font-[500] mb-[7px]">Lakeside Motel Warefront</p>
                <!-- //////// -->
                <div class="flex gap-[12px] mb-[30px]">
                  <span class="flex"> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/srhv.svg" alt="strhf">
                  </span>
                  <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                </div>
                <!-- /////// -->
                <div class="text-[13px] text-Gray2 flex flex-col gap-[8px] ">
                  <p class="  mb-[4px] text-[14px] text-srchRed  ">Non refundable</p>
                  <p class=" ">Check in: Sunday, March 18, 2022 </p>
                  <p class=" ">Check out: Tuesday, March 20, 2022 </p>
                  <p class="  ">2 night stay</p>
                </div>
              
              </div>
              <div class="flex items-end flex-col flex-2 text-right justify-end ">
  
                <div class="flex gap-[8px] font-[500]  items-center  ">
                  <span class="text-[14px] text-srchRed line-through">$150</span>
                  <span class="text-[20px]">$310</span>
                </div>
                <p class="mt-[6px] text-Gray2 text-[14px] "> Includes taxes and fees </p>
                <button class="mt-[16px] text-white bg-primary
                 rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
              </div>

            </div>
      
          </div>
            
        </div>

        <!-- //// -->

            <div class=" flex gap-[24px]" >
              <div class="flex gap-[24px] w-full rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
              <div class="flex-2  rounded-[5px] ">
                  <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/1010.png" alt="1010trp">
              </div>
              <div class="flex flex-1  justify-between ">
                <div class="  w-1/3 ">
                  <p class="text-[20px] font-[500] mb-[7px]">Lakeside Motel Warefront</p>
                  <!-- //////// -->
                  <div class="flex gap-[12px] mb-[30px]">
                    <span class="flex"> 
                      <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                      <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                      <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                      <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                      <img src="../../assets/icons/srhv.svg" alt="strhf">
                    </span>
                    <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                  </div>
                  <!-- /////// -->
                  <div class="text-[13px] text-Gray2 flex flex-col gap-[8px] ">
                    <p class="  mb-[4px] text-[14px] text-srchRed  ">Non refundable</p>
                    <p class=" ">Check in: Sunday, March 18, 2022 </p>
                    <p class=" ">Check out: Tuesday, March 20, 2022 </p>
                    <p class="  ">2 night stay</p>
                  </div>
              
                </div>
                <div class="flex items-end flex-col flex-2 text-right justify-end ">
  
                  <div class="flex gap-[8px] font-[500]  items-center  ">
                    <span class="text-[14px] text-srchRed line-through">$150</span>
                    <span class="text-[20px]">$310</span>
                  </div>
                  <p class="mt-[6px] text-Gray2 text-[14px] "> Includes taxes and fees </p>
                  <button class="mt-[16px] text-white bg-primary
                 rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
                </div>

              </div>

            </div>

          </div>


        <!-- ///////////////// -->

        <div class="">

        </div>

    </div>

        <!-- //end small divs  -->
  
        <!-- start footer -->

          <div class="relative w-full h-[152px] ">
            <HomeAlert class="top-[unset] "/>
          </div>

          <div class=" bottom-0 p-2 " >
            <HomeListFooter  />
          </div>
          
        <!-- end footer -->
        </div>

      </div>
   

  <!-- end the container -->

    <div class="relative bottom-0  ">
      <footerlastbtmVue class="absolute bottom-0 w-full"/>
    </div>

  </div>
</template>

<script setup>

import footerlastbtmVue from '../footerlastbtm.vue';
import NavSignined from '../Navs/NavSignined.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';

</script>
