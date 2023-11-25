<template   >

  <header class="text-white mb-[104px]  ">

    <div class="relative top-0 text-white h-[200px] w-full bg-gradient-to-b from-laniergrad1 to-laniergrad2 "> 
       
<!-- //////// -->

   <nav class=" mx-auto flex items-center justify-between h-[68px] w-[calc(100%-100px)]  ">

          <RouterLink :to="{ name: 'signedhome' }">
            <div class="flex gap-[4px] items-center text-[16px] text-white  ">
              <img src="../../assets/icons/wtiplan.svg" alt="planIconwit"  >
              <p class=" tracking-[0.36px] font-[500] text-[18px]  ">my Dream Place </p>
            </div>
          </RouterLink>
          <div class=" text-white ">
            <ul class=" inline-flex tracking-[0.36px] text-[16px] items-start gap-[48px]  ">
              <a href="/"><li>Home</li></a>
              <a href="#"><li>Discover</li></a>
              <a href="#"><li>Activities</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
          <div class=" flex relative right-0">
              <div class="flex gap-[22px] ">
                <img class="py-[10px] px-[18px] cursor-pointer " src="../../assets/icons/notification 1.svg" alt="iconswt">
                <img  @click="toggleModal" class="cursor-pointer " src="../../assets/icons/Ellipse 2.svg" alt="userimg">
               </div>
               <div v-if="modalActive" class="absolute z-10 right-[0px] bottom-[-200px] w-[200px] flex text-[15px] bg-BGC rounded-[10px]  ">
                   <ul class=" flex flex-col  items-center 
                     capitalize transition ease-in duration-400
                    text-light-black w-[100%] justify-center
                     text-center  gap-[4px] mx-[12px] ">
                      <a class="flex gap-[10px] hover:transition-all 
                      transition ease-in duration-400 
                      w-[100%] py-[10px] border-solid border-b-2
                       border-bordrBtnGry cursor-pointer" href="#" >
                       <img class="flex  w-[20px] h-[20px]" src="../../assets/icons/user-square 1.svg" alt="">
                       <li class=" ">Manage account</li>
                      </a>
                      <a class="flex gap-[10px] hover:transition-all 
                      transition ease-in duration-400 
                      w-[100%] py-[10px] border-solid border-b-2
                       border-bordrBtnGry cursor-pointer" href="#" >
                         <img class="flex  w-[20px] h-[20px]" src="../../assets/icons/bxs-plane-take-off 1.svg" alt="">
                         <li class=" ">My Trips</li>
                      </a>
                      <a class="flex gap-[10px]    w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer" href="#" >
                       <img class="w-[20px] h-[20px]" src="../../assets/icons/wallet-3 1.svg" alt="">
                       <li class=" ">Reward and wallet</li>
                      </a>
                       <RouterLink :to="{ name: 'home' }" class="flex gap-[10px]  w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer" href="#" >
                        <img class="w-[20px] h-[20px]" src="../../assets/icons/logout 1.svg" alt="">
                        <li class="">Sign out</li>
                       </RouterLink>
                     </ul>
                </div>

            </div> 

        </nav>

<!-- //////// -->

    <!-- //////////start search////////// -->
              <div class="absolute left-[85px] bottom-[-15%]">
                <!-- <div class="absolute left-[105px] bottom-[-15%]"> -->
                  <HomeSearch/>
              </div>
      <!-- //////////end search///////// -->

    </div>
   
  </header>
 

  <!-- ////////////////////start body//////////////////////// -->
<div class="  bg-green-400 m-auto w-[calc(100vw-200px)] "> 

  <div class="flex bg-yellow-900 p-2 mb-[96px]">

  <div class="flex-2 w-[295px]  bg-yellow-200 p-2">
    

  </div>

    <!-- end flex 2-->

  <div class="flex-1 bg-yellow-500 p-2 ">



    <div class="flex items-center justify-between bg-gray-400 mb-[24px]">

        <h2 class="text-[24px] font-[600] text-dark-black">Melbourne : 2,582 search results found</h2>
          <div class="flex items-center w-[190px] gap-[10px]  mx-[12px] mt-[11px] mb-[12px]">
             <button class="flex items-center justify-between border-solid border-1 border-bordersr
               w-[100%] rounded-[6px] py-[8px] px-[12px] bg-transparent hover:bg-transparent "  > 
               
                <div class="flex flex-col gap-[2px] text-left">
                  <span class="text-sortText text-[12px]">Sort by :</span>
                  <span class="text[14px] ">Recommended</span>
                </div>

                 <div @click="toggleModalSerch" class="flex cursor-pointer  ">
                    <svg  v-show="!modalActiveSerch"  xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg  v-show="modalActiveSerch" xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655" 
                        stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
               
              </button>
            </div>
 
    </div>


    <div class="bg-red-800 p-2">

       <div class="flex gap-[24px] rounded-[5px] border-solid border-1 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
          <div class="flex-2 bg-red-100 rounded-[5px] ">
            <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/12.png" alt="12">
          </div>
          <div class="flex flex-1 bg-red-500">
            <div class="bg-red-200 flex-1 p-2">
              <p class="text-[20px] font-[500]">Julia Dens Resort</p>
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
              <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
              <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
                and a late checkout. Gym included. Flexible cancellation applies</p>
              <button class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
            </div>
            <div class="flex items-end flex-col flex-2 bg-green-200 text-right  ">
              <p class="text-[13px] bg-srchRed py-[4px] px-[8px] mb-[64px] rounded-[6px] font-[500] text-white" >Book now and receive 15% off</p>
              <p class="text-[13px] bg-srchGrn mb-[29px]  py-[4px] px-[8px] rounded-[6px]  font-[500] text-white" >5% off</p>
              <div class="flex gap-[8px] font-[500]  items-center  ">
                <span class="text-srchRed text-[14px] line-through ">$150</span>
                <span class="text-[20px]">$130</span>
              </div>
              <p class="mt-[6px]"> Includes taxes and fees </p>
              
            </div>
          </div>
       </div>

    </div>




  </div>

  <!-- end flex 1 -->

  </div>

  <!-- /////////////////////end body/////////////////////// -->

    <div class=" relative top-0  w-full bg-blue-800 mb-[70px] h-[72px] ">
        <HomeAlert class=" top-[0%]   "  />
    </div>

    <div class=" bg-blue-400 ">
      <div class="bottom-0">
        <HomeListFooter />
      </div>
    </div>

  </div>

  <div class="relative bottom-0 left-0 w-full ">
    <footerlastbtm  class="absolute  left-0 bottom-0 w-[100%] " />
  </div>

</template>

<script setup>
import HomeSearch from '../HomePageCompos/HomeSearch.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
import HomeListFooter from '../HomePageCompos/HomeListFooter.vue';
import footerlastbtm from '../footerlastbtm.vue';


import { ref } from 'vue';


// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue'
// import { TwDropdownMenu, TwButton } from "vue3-tailwind"

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },

})



</script>

