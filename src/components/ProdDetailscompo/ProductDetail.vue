<template>

    <!-- <div class="h-[100vh] " > -->

    <div class="mb-[92px] top-[unset] ">
      <!-- <div class=" "> -->
      <NavSignined  class="" />
    </div>

  <div class=" "> 

    <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]  " >  

      <ProdDetDon1/>

    </div>

  </div>

<!-- //next section -->

 <div class="bg-bggraynstedpage  "> 
   <!-- <div class="bg-orange-900 p-2  ">  -->

  <div class="relative top-[unset] bottom-0 m-auto w-[calc(100%-100px)]  p-2 bg-blue-800" >  

      <div class="bg-pink-900 flex flex-col p-2 mb-[172px] gap-[30px]  ">
        <!-- <div class="bg-bggraynstedpage"> -->
        <div class="bg-yellow-300 p-2   ">



          <!-- start products details nav  -->
          <div class="flex gap-[14px] text-[16px] font-[400]">
            <span @click="handlePDN " class=" py-[10px] px-[14px] cursor-pointer text-Gray2  border-b-4 border-primary  ">Overview</span>
            <span @click="handlePDN" class=" py-[10px] px-[14px] cursor-pointer text-Gray2 ">Rooms</span>
          </div>


          <!--  end products details nav -->


          <ProdDetDon2/>
       

        <!-- /// -->

      </div>

    </div>


      <!-- /////////////////// -->

    <div class="relative top-[unset] bottom-[0px] w-[full] ">
      <div class="top-[unset] h-[72px]  w-full mb-[70px] ">
        <HomeAlert class=" top-[unset]  "  />
      </div>
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
import ProdDetDon1 from './ProdDetDon1.vue';
import ProdDetDon2 from './ProdDetDon2.vue';

import { ref } from 'vue';

const PrdDetNv = ref(false)

const handlePDN = () => {
  PrdDetNv = !PrdDetNv
   console.log("handlePDN , PrdDetNv " )
}

</script>
