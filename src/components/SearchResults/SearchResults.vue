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

<!-- start cards -->

     <div class="bg-red-800 p-2 flex flex-col gap-[24px]">
           <div class="flex gap-[24px] w-[100%] bg-gray-200 rounded-[5px] border-solid border-1
          border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
              <div class="flex-2  rounded-[5px] ">
                <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/12.png" alt="12">
              </div>
              <div class="flex flex-1 ">
                <div class=" flex-1 p-2">
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
                <div class="flex items-end flex-col flex-2 text-right justify-end   ">
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


<!-- ////// -->


    <div class="bg-red-800 p-2 flex flex-col gap-[24px]">
           <div class="flex gap-[24px] bg-gray-200 rounded-[5px] border-solid border-1
            border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
          <div class="flex-2  rounded-[5px] ">
            <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/12.png" alt="12">
          </div>
          <div class="flex flex-1 ">
            <div class=" flex-1 p-2">
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
            <div class="flex items-end flex-col flex-2 text-right justify-end ">
               
              <div class="flex gap-[8px] font-[500]  items-center  ">
                <span class="text-[20px]">$130</span>
              </div>
              <p class="mt-[6px]"> Includes taxes and fees </p>
            </div>
          </div>
       </div>
    </div>

    <!-- /////// -->
     

    <div class="mt-[56px] flex gap-[8px] m-auto text-center items-center justify-center ">

      <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white  ">

        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 68 68" fill="none">
          <g filter="url(#filter0_d_25_579)">
            <path d="M26 50C20.3431 50 17.5147 50 15.7574 48.2426C14 46.4853 14 43.6569 14 38L14 22C14 16.3431 14 13.5147 15.7574 11.7574C17.5147 10 20.3431 10 26 10H42C47.6569 10 50.4853 10 52.2426 11.7574C54 13.5147 54 16.3431 54 22L54 38C54 43.6569 54 46.4853 52.2426 48.2426C50.4853 50 47.6569 50 42 50H26Z" fill="white" shape-rendering="crispEdges"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7524 29.7831L37.2502 25.8391C37.5831 25.5468 37.5831 25.0754 37.2502 24.7831C37.0916 24.6435 36.8752 24.565 36.6496 24.565C36.4239 24.565 36.2075 24.6435 36.0489 24.7831L30.9504 29.2544C30.6165 29.5463 30.6165 30.0184 30.9504 30.3104L36.0487 34.7816C36.2075 34.9212 36.4239 34.9998 36.6496 34.9998C36.8752 34.9998 37.0916 34.9212 37.2504 34.7816C37.5831 34.4893 37.5831 34.0178 37.25 33.7256L32.7524 29.7831Z" fill="#C5C5C5"/>
          </g>
          <defs>
            <filter id="filter0_d_25_579" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_579"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_579" result="shape"/>
            </filter>
          </defs>
        </svg> -->

        <img class="w-[40px] h-[40px] rounded-[6px] " src="../../assets/icons/Arrow.svg" alt="leftarr">
 
      </div>

      <div class="flex ">
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-primary text-white  
        text-[16px] py-[9px] text-center">1</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">2</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">3</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr 
         text-[16px] py-[9px] text-center">....</div>
        <div class="rounded-[6px] cursor-pointer w-[40px] h-[41px] bg-white text-paginatiopntextcolr
          text-[16px] py-[9px] text-center">20</div>
      </div>


      <div class="rounded-[6px] cursor-pointer shadow-md">

        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
          <g filter="url(#filter0_d_25_592)">
            <path d="M42 50C47.6569 50 50.4853 50 52.2426 48.2426C54 46.4853 54 43.6569 54 38L54 22C54 16.3431 54 13.5147 52.2426 11.7574C50.4853 10 47.6569 10 42 10H26C20.3431 10 17.5147 10 15.7574 11.7574C14 13.5147 14 16.3431 14 22L14 38C14 43.6569 14 46.4853 15.7574 48.2426C17.5147 50 20.3431 50 26 50H42Z" fill="white" shape-rendering="crispEdges"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2476 29.7831L30.7498 25.8391C30.4169 25.5468 30.4169 25.0754 30.7498 24.7831C30.9084 24.6435 31.1248 24.565 31.3504 24.565C31.5761 24.565 31.7925 24.6435 31.9511 24.7831L37.0496 29.2544C37.3835 29.5463 37.3835 30.0184 37.0496 30.3104L31.9513 34.7816C31.7925 34.9212 31.5761 34.9998 31.3504 34.9998C31.1248 34.9998 30.9084 34.9212 30.7496 34.7816C30.4169 34.4893 30.4169 34.0178 30.75 33.7256L35.2476 29.7831Z" fill="#2F80ED"/>
          </g>
          <defs>
            <filter id="filter0_d_25_592" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_592"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_592" result="shape"/>
            </filter>
          </defs>
        </svg>

      </div>

    </div>

  <!-- end cards -->





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

