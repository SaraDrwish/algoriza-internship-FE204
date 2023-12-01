<template>

    <!-- <div class="h-[100vh] " > -->

    <div class="mb-[92px] top-[unset] ">
      <!-- <div class=" "> -->
      <NavSignined  class="" />
    </div>

  <div class=" "> 

    <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]  " >  

      <div class="bg-pink-600 flex flex-col p-2  gap-[30px] ">
        <!-- <div class="bg-pink-600 flex flex-col p-2 mb-[172px] gap-[30px] "> -->

        <div class="bg-red-700   flex h-[452px] gap-[20px] ">

          <div class=" h-[452px] w-[68%]   flex-2  ">
              <img class="rounded-[5px] w-[100%] h-[100%] " src="../../assets/imgs/d1.png" alt="d1">
          </div>

          <div class=" w-[32%]  flex flex-col flex-1 justify-between  gap-[16px]  ">

              <div class=" h-[218px] ">
                <img class="rounded-[5px] w-[100%] h-[100%] " src="../../assets/imgs/d2.png" alt="d2">
              </div>
              <div class=" h-[218px]  ">
                <img class=" rounded-[5px] w-[100%] h-[100%] " src="../../assets/imgs/d3.png" alt="d3">
              </div>

          </div>

        </div>

      </div>

    </div>

  </div>

<!-- //next section -->

 <div class="bg-bggraynstedpage  "> 
   <!-- <div class="bg-orange-900 p-2  ">  -->

  <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]  p-2 bg-blue-800" >  

      <div class="bg-pink-900 flex flex-col p-2 mb-[172px] gap-[30px]  ">
        <!-- <div class="bg-bggraynstedpage"> -->
        <div class="bg-yellow-500 p-2 relative top-[unset] bottom-0 m-auto   ">
          <!-- start products details nav  -->
          <div class="flex gap-[14px] text-[16px] font-[400]">
            <span class=" py-[10px] px-[14px] text-Gray2  border-b-4 border-primary  ">Overview</span>
            <span class=" py-[10px] px-[14px] text-Gray2 ">Rooms</span>
          </div>

        <div class="bg-gray-500 p-2 border-t-2 border-gray-400 flex gap-[30px] ">

          <div class="bg-pink-300 p-2 flex flex-col gap-[12px] flex-2">
          <p class="text-[32px] font-[600] text-checkoutText1 ">Lakeside Motel Warefront</p>
              <!-- /////// -->
            <div class="flex gap-[12px] mb-[17px]">
              <span class="flex"> 
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/srhv.svg" alt="strhf">
              </span>
              <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
            </div>
            <div class="flex gap-[6px]  ">
              <img class="w-[20px] h-[20px] " src="../../assets/icons/location2.svg" alt="locationPD">
              <span class="text-[14px] text-Gray2 ">Lorem ipsum road, Tantruim-2322, Melbourne, Australia</span>
            </div>
            <!-- /////// -->

            <div class="bg-black-500">

              <p>Overview</p>
              
            </div>

          </div>

              <!-- /// -->

          <div class="flex flex-col flex-1 bg-green-100 p-2 gap-[35px] ">

            <div class="">
              <img class=" rounded-[6px]" src="../../assets/imgs/locationmap1.png" alt="locationmap1">
            </div>
            <div class="  bg-green-300 p-2 gap-[22px]">
              <p class="text-[18px] font-[500] ">Explore the area</p>
              <ul class="flex flex-col justify-between bg-blue-200 p-2" >
                <li class="flex bg-orange-100 p-2">
                  <div class="flex text-left items-start">
                      <img  src="../../assets/icons/bxs-plane-alt 2.svg" alt="bxs-plane-alt 2.svg">
                      <span>Hotel Penselvenyia</span>
                  </div>
                  <div class="text-right items-end">
                    <span>2 min drive</span>
                  </div>
                </li>
                <li class="flex bg-orange-200 p-2" >
                  <div class="flex">
                      <img src="../../assets/icons/bxs-map 1.svg" alt="locationPD2">
                      <span>Travis Bakery store house</span>
                  </div>
                  <div class="">
                    <span>2 min drive</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

  

        </div>

        <!-- //// -->

        <div class="bg-gray-600 p-2 mt-[40px]  ">
          <p class="text-[24px] font-[600] text-checkoutText1 " >Available rooms</p>

          <div class="">

          </div>

          <div class="">
            <div class=""></div>
            <div class=""></div>
          </div>

        </div>


        <!-- /// -->


      </div>

    </div>



      <!-- /////////////////// -->

    <div class="relative top-[unset] bottom-[0px] w-[full] ">
      <div class="top-[unset] h-[72px]  w-full mb-[70px] ">
        <HomeAlert class=" top-[unset]  "  />
      </div>
      <!-- <div class="mb-[unset] pb-[60px]" > -->
        <div class=" " >
        <HomeListFooter   />
      </div>
    </div>
  
  </div>

</div>

  <div class="relative bottom-0 left-0 w-full ">
    <footerlastbtm  class="absolute  left-0 bottom-0 w-[100%] " />
  </div>


</template>

<script setup>
import NavSignined from '../Navs/NavSignined.vue' 
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import footerlastbtm from '../footerlastbtm.vue';
</script>
